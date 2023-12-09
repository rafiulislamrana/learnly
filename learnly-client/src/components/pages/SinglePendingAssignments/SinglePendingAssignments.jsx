import axios from "axios";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { Document } from 'react-pdf'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const SinglePendingAssignments = () => {
    const {user} = useContext(AuthContext)
    const pending = useLoaderData()
    const navigation = useNavigate()
    const assignmenId = useParams()

    const handleform = (e) => {
        e.preventDefault();

        //const form = new FormData(e.currentTarget);
        // const Feedback = form.get("Feedback");
        // const Marks = form.get("Marks");
        
        
        const updateAssignment = { title: pending.title, description: pending.description, marks: pending.marks, PDFURL: pending.PDFURL, email: user.email, name: user.displayName, status: "complete", assignmentId:  assignmenId.id}

        axios.put(`https://learnly-server.vercel.app/submit-assignments/${pending._id}`, updateAssignment)
        .then(res => {
            Swal.fire("Student received mark and feedback successfully!")
            .then((result) => {
                if (result.isConfirmed) {
                    navigation("/all-submitted-assignments")
                }
                }
              )
            console.log(res.data)
        })
    }

    return (
        <div>
            <div>
                <div className="bg-primary">
                    <div className="max-w-6xl mx-auto">
                        <div className=" py-20 items-center">
                            <div className="">
                                <h1 className=" text-white font-extrabold font-space text-4xl md:text-6xl">{pending.title}</h1>
                            </div>
                            <div className="pt-5 text-white flex flex-col justify-center items-center">
                                <p className="text-left text-base">Submitted by</p>
                                <h4 className="card-title text-left font-space text-xl">{pending.name}</h4>
                                <p className="text-left">Total Marks: {pending.marks}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto py-10">
                    <div className="text-center">
                        <h4 className="card-title justify-center font-space text-xl">PDF Link</h4>
                        <a href=""></a>
                        <Link to={pending.PDFURL} className="text-primary underline break-words md:text-base">{pending.PDFURL}</Link>
                        <Document file={pending.PDFURL} />
                    </div>

                    <div className="text-center pt-5">
                        <h4 className="card-title justify-center font-space text-xl">Note</h4>
                        <Link to={pending.PDFURL}>{pending.description}</Link>
                    </div>
                </div>

                <div className="mx-auto max-w-3xl py-5">
                    <h1 className="text-center text-3xl font-bold pb-2 text-primary">Give Marks and Feedback</h1>
                    
                    <form onSubmit={handleform} className="mx-3">
                        <div className="grid grid-cols-1 gap-3">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-black ">Marks</span>
                                </label>
                                <input type="number" name="Marks" placeholder="Type here" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-black ">Feedback</span>
                                </label>
                                <textarea style={{ height: '150px' }} className="input input-bordered pt-3" name="Feedback" id="" cols="30" rows="10"></textarea>
                            </div>


                        </div>
                        <button className="btn btn-block mt-8 text-primary ">submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SinglePendingAssignments;