import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";


const SingleAssignment = () => {
    const { user } = useContext(AuthContext)
    const [singleAss, setSingleAss] = useState([])
    const id = useParams()
    const navigateUser = useNavigate()
    const { title, description, imgURL, marks, difficulty, subject, dueDate, _id } = singleAss;
    useEffect(() => {
        axios.get(`http://localhost:5000/assignment/${id.id}`)
            .then(res => setSingleAss(res.data))
    }, [])
    console.log(singleAss)

    const handleUpdate = (id) => {
        
        if (singleAss.email == user.email) {
            console.log("Clicking")
            
            Swal.fire({title:"Are you want to update this assignment?",
            confirmButtonText: "Yes"})
            .then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigateUser(`/update-assignment/${id}`)
                }
            })
        }
        else {
            Swal.fire("You cant update this Assignment")
        }
    }

    const handleDelete = (id) => {
        if (singleAss.email == user.email) {
            axios.delete(`http://localhost:5000/assignment/${id}`, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                    Swal.fire("Assignment deleted successfully!")
                        .then((result) => {
                            /* Read more about isConfirmed, isDenied below */
                            if (result.isConfirmed) {
                                navigateUser("/assignments")
                            }
                        }
                        )

                })
        }
        else {
            Swal.fire("You cant delete this Assignment")
        }


    }


    console.log(singleAss)
    return (
        <div>
            <div className="bg-primary">
                <div className="max-w-6xl mx-auto">
                    <div className=" py-20 items-center">
                        <div className="">
                            <h1 className=" text-white font-extrabold font-space text-4xl md:text-6xl">{title}</h1>
                            <p className="text-white pt-5">{description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto py-10">
                <div className="flex flex-col md:flex-row justify-center items-center mx-3 gap-10">
                    <div className="flex-1">
                        <img className="rounded-lg w-full object-cover" src={imgURL} alt="" />
                    </div>
                    <div className="border border-primary rounded-lg p-6 w-72 shadow-md shadow-primary flex flex-col items-center">
                        <div>
                            <h2 className="card-title font-space justify-center text-2xl">Assignment Details</h2>
                        </div>
                        <div className="flex-1 py-5 flex flex-col justify-center gap-3">

                            <p className="text-left text-lg max-w-fit"><span className="font-bold font-space">Subject: </span>{subject}</p>
                            <p className="text-left text-lg max-w-fit"><span className="font-bold font-space">Marks: </span>{marks}</p>
                            <p className="text-left text-lg max-w-fit"><span className="font-bold font-space">Difficulty: </span>{difficulty}</p>
                            <p className="text-left text-lg max-w-fit"><span className="font-bold font-space">Due Date: </span>{dueDate}</p>
                        </div>
                        <div className="flex flex-col gap-3 ">
                            <Link to={`/submit/${_id}`}><button className="text-lg w-full bg-primary px-5 py-2 rounded text-white font-space">Take the Assignment</button></Link>
                            <Link onClick={() => handleUpdate(_id)}><button className="text-lg border-primary border px-5 py-2 rounded text-primary font-space w-full">Update Assignment</button></Link>
                            <Link onClick={() => handleDelete(_id)}><button className="text-lg bg-red-600 px-5 py-2 rounded text-white font-space w-full">Delete Assignment</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAssignment;