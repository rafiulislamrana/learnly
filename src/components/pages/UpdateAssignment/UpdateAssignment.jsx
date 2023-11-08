import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateAssignment = () => {
    const updateProd = useLoaderData()
    const [startDate, setStartDate] = useState(new Date(updateProd.startDate));
    const assignmenId = useParams()
    console.log(assignmenId)


    const handleform = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const title = form.get("title");
        const difficulty = form.get("difficulty");
        const marks = form.get("marks");
        const subject = form.get("subject");
        const description = form.get("description");
        const imgURL = form.get("imgURL")
        console.log(difficulty)

        // const newAssignment = { title, difficulty, dueDate, marks, subject, description, imgURL }


        // fetch(`https://tastify-server.vercel.app/update/${prodId.id}`, {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(updateProduct)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount == 1) {
        //             Swal.fire('Product Updated Succesfully!');
        //         }
        //         console.log(data)
        //     })
    }
    return (
        <div>
            <div className="mx-auto max-w-3xl py-20">
                <h1 className="text-center text-3xl font-bold pb-5 text-primary">Update Assignment</h1>
                <form onSubmit={handleform} className="mx-3">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Title</span>
                            </label>
                            <input type="text" defaultValue={updateProd.title} name="title" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Difficulty</span>
                            </label>

                            <select defaultValue={updateProd.difficulty} name="difficulty" className="select select-bordered w-full">
                                <option disabled selected>What is the difficulty level?</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                            
                        </div>
                        <div className="form-control w-full ">

                            <label className="label">
                                <span className="label-text text-black ">Due Date</span>
                            </label>
                            <DatePicker
                                
                                className="input input-bordered w-full "
                                dateFormat="dd/MM/yyyy"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            {/* <input type="text" name="price" placeholder="Type here" className="input input-bordered w-full " /> */}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Marks</span>
                            </label>
                            <input defaultValue={updateProd.marks} type="number" name="marks" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Subject</span>
                            </label>
                            <input defaultValue={updateProd.subject} type="text" name="subject" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Thumbnail Image URL</span>
                            </label>
                            <input defaultValue={updateProd.imgURL} type="text" name="imgURL" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full col-span-2">
                            <label className="label">
                                <span className="label-text text-black ">Description</span>
                            </label>
                            <textarea defaultValue={updateProd.description} style={{ height: '150px' }} className="input input-bordered pt-3" name="description" id="" cols="30" rows="10"></textarea>
                        </div>


                    </div>
                    <button className="btn btn-block mt-8 text-primary ">submit</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateAssignment;