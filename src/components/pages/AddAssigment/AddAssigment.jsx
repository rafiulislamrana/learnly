import axios from "axios";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const AddAssigment = () => {
    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const navigation = useNavigate()
    const handleform = (e) => {
        e.preventDefault();
        const formattedStartDate = startDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });
        
        const dueDate = formattedStartDate


        const form = new FormData(e.currentTarget);
        const title = form.get("title");
        const difficulty = form.get("difficulty");
        // const price = form.get("price");
        const marks = form.get("marks");
        const subject = form.get("subject");
        const description = form.get("description");
        const imgURL = form.get("imgURL");
        
        
        const newAssignment = { title, difficulty, dueDate, startDate, marks, subject, description, imgURL, email: user.email }

        axios.post("https://learnly-server.vercel.app/assignments", newAssignment)
        .then(res => {
            Swal.fire("New Assignment added successfully!")
            .then((result) => {
                
                if (result.isConfirmed) {
                    navigation("/assignments")
                }
                }
              )
            console.log(res.data)
        })
    }

    return (
        <div>
            <div className="mx-auto max-w-3xl py-20">
                <h1 className="text-center text-3xl font-bold pb-5 text-primary">Add Assignment</h1>
                <form onSubmit={handleform} className="mx-3">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Difficulty</span>
                            </label>
                            <select name="difficulty" className="select select-bordered w-full">
                                <option disabled selected>What is the difficulty level?</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                            {/* <input type="text" name="brandname" placeholder="Type here" className="input input-bordered w-full " /> */}
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
                            <input type="number" name="marks" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Subject</span>
                            </label>
                            <input type="text" name="subject" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Thumbnail Image URL</span>
                            </label>
                            <input type="text" name="imgURL" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full col-span-2">
                            <label className="label">
                                <span className="label-text text-black ">Description</span>
                            </label>
                            <textarea style={{ height: '150px' }} className="input input-bordered pt-3" name="description" id="" cols="30" rows="10"></textarea>
                        </div>


                    </div>
                    <button className="btn btn-block mt-8 text-primary ">submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddAssigment;