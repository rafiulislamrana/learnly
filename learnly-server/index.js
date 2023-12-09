const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express()

//middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://learnly-rir.web.app"
  ],
  credentials: true
}))
app.use(express.json());
app.use(cookieParser())

const verifyToken = (req, res, next) =>{
  const token = req.cookies?.token;
  if(!token){
    return res.status(401).send({message: "Unathorize access"})
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
    if(err){
      return res.status(401).send({message: "Unathorize access"})
    }
    req.user = decoded;
    next()
  })
  
}


//mongodb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.siu5qhz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    const assignmentDataCollection = client.db("LearnlyDB").collection("assignments");
    const submittedAssignmentsDataCollection = client.db("LearnlyDB").collection("submittedAssignments");
    
    app.post("/jwt", async(req, res) => {
      const userData = req.body
      const token = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET , {expiresIn : "1h"})
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none"
      })
      .send({sucess: true})
    })

    app.post("/logout", async (req, res) => {
      const user = req.body
      res.clearCookie("token", {maxAge: 0}).send({success: true})
    })

    app.post("/assignments", async (req, res) => {
      const assignment = req.body
      const result = await assignmentDataCollection.insertOne(assignment)
      res.send(result)
    })

    app.post("/submit-assignments", async (req, res) => {
      const assignmentSub = req.body
      const result = await submittedAssignmentsDataCollection.insertOne(assignmentSub)
      res.send(result)
    })

    app.get("/assignments", async (req, res) => {
      const cursor = assignmentDataCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get("/assignmentsPage", async (req, res) => {
      const page = parseInt(req.query.page)
      const size = parseInt(req.query.size)
      const sort = req.query.sort
      const skip = page * size;
      if (sort) {
        const query = { difficulty: sort }
        const cursor = assignmentDataCollection.find(query)
        const result = await cursor.toArray()
        res.send(result)
      }
      else {
        const cursor = assignmentDataCollection.find().skip(skip).limit(size)
        const result = await cursor.toArray();
        res.send(result)
      }
    })

    app.get("/assignment/:id", async (req, res) => {
      const id = req.params.id
      
      const query = { _id: new ObjectId(id) }
      const result = await assignmentDataCollection.findOne(query)
      res.send(result)
    })

    app.get("/assignment-count", async (req, res) => {
      const count = await assignmentDataCollection.estimatedDocumentCount()
      res.send({ count })
    })

    app.get("/my-assignments", verifyToken, async (req, res) => {
      const userEmail = req.query.email;
      if(req.user.email != userEmail){
        return res.status(403).send({message: "forbidden access"})
      }
      const query = { email: userEmail }
      const cursor = assignmentDataCollection.find(query)
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get("/submit-assignments", async(req, res) => {
      const reqStatus = req.query.status;
      const query = {status: reqStatus}
      console.log(query)
      const cursor = submittedAssignmentsDataCollection.find(query)
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get("/pending-assignments/:id", async(req, res) => {
      const reqId = req.params.id
      const query = {assignmentId: reqId}
      console.log(query)
      const result = await submittedAssignmentsDataCollection.findOne(query)
      res.send(result);
    })


    app.put("/update-assignment/:id", async (req, res) => {
      const updateId = req.params.id
      const updateData = req.body
      const filter = { _id: new ObjectId(updateId) }
      const options = { upsert: true };
      const update = {
        $set: {
          title: updateData.title,
          difficulty: updateData.difficulty,
          dueDate: updateData.dueDate,
          startDate: updateData.startDate,
          marks: updateData.marks,
          subject: updateData.subject,
          description: updateData.description,
          imgURL: updateData.imgURL,
          email: updateData.email
        }
      }
      const result = await assignmentDataCollection.updateOne(filter, update, options)
      res.send(result)
    })

    app.put("/submit-assignments/:id", async (req,res) => {
      const updateSubId = req.params.id
      const updateSubData = req.body
      const filter = { _id: new ObjectId(updateSubId) }
      const options = { upsert: true };
      const update = {
        $set: {
          title: updateSubData.title,
          marks: updateSubData.marks,
          description: updateSubData.description,
          PDFURL: updateSubData.PDFURL,
          email: updateSubData.email,
          name: updateSubData.name,
          status: updateSubData.status,
          assignmentId: updateSubData.assignmentId
        }
      }
      const result = await submittedAssignmentsDataCollection.updateOne(filter, update, options)
      res.send(result)
    })

    app.delete("/assignment/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await assignmentDataCollection.deleteOne(query)
      res.send(result)
    })


    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Learnly server is running")
})

app.listen(port, () => {
  console.log("This server is running on port: ", port)
})