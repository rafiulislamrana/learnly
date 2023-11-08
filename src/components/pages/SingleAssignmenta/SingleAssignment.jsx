import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const SingleAssignment = () => {
    const [singleAss, setSingleAss] = useState([])
    const id = useParams()
    const navigation = useNavigate()
    const { title, description, imgURL, marks, difficulty, subject, dueDate, _id } = singleAss;
    useEffect(() => {
        axios.get(`http://localhost:5000/assignment/${id.id}`)
            .then(res => setSingleAss(res.data))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/assignment/${id}`)
        .then(res => {
            console.log(res.data)
            Swal.fire("Assignment deleted successfully!")
            .then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigation("/assignments")
                }
                }
              )
            
        })
    }


    console.log(singleAss)
    return (
        <div>
            <div className="bg-primary">
                <div className="max-w-6xl mx-auto">
                    <div className=" py-20 items-center">
                        <div className="">
                            <h1 className=" text-white font-extrabold font-space text-6xl">{title}</h1>
                            <p className="text-white pt-5">{description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto py-10">
                <div className="flex gap-10">
                    <div className="flex-1">
                        <img className="rounded-lg w-full object-cover" src={imgURL} alt="" />
                    </div>
                    <div className="border border-primary rounded-lg p-6 w-72 shadow-md shadow-primary flex flex-col items-center">
                        <div>
                            <h2 className="card-title font-space justify-center text-2xl">Assignment Details</h2>
                        </div>
                        <div className="flex-1 flex flex-col justify-center gap-3">

                            <p className="text-left text-lg max-w-fit"><span className="font-bold font-space">Subject: </span>{subject}</p>
                            <p className="text-left text-lg max-w-fit"><span className="font-bold font-space">Marks: </span>{marks}</p>
                            <p className="text-left text-lg max-w-fit"><span className="font-bold font-space">Difficulty: </span>{difficulty}</p>
                            <p className="text-left text-lg max-w-fit"><span className="font-bold font-space">Due Date: </span>{dueDate}</p>
                        </div>
                        <div className="flex flex-col gap-3 ">
                            <Link to="/registration"><button className="text-lg w-full bg-primary px-5 py-2 rounded text-white font-space">Take the Assignment</button></Link>
                            <Link to={`/update-assignment/${_id}`}><button className="text-lg border-primary border px-5 py-2 rounded text-primary font-space w-full">Update Assignment</button></Link>
                            <Link onClick={() => handleDelete(_id)} to={"/assignments"}><button className="text-lg bg-red-600 px-5 py-2 rounded text-white font-space w-full">Delete Assignment</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAssignment;