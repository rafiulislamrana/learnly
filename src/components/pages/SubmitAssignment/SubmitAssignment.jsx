import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const SubmitAssignment = () => {
    const {user} = useContext(AuthContext)
    const navigation = useNavigate()
    const assignmenId = useParams()
    const submitting = useLoaderData()

    const handleform = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const description = form.get("description");
        const PDFURL = form.get("PDFURL");
        
        
        const submitAssignment = { title: submitting.title, description, marks: submitting.marks, PDFURL, email: user.email, name: user.displayName, status: "pending", assignmentId:  assignmenId.id}

        axios.post("https://learnly-server.vercel.app/submit-assignments", submitAssignment)
        .then(res => {
            Swal.fire("Assignment submitted successfully!")
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
                <h1 className="text-center text-3xl font-bold pb-5 text-primary">Submit Assignment</h1>
                
                <form onSubmit={handleform} className="mx-3">
                    <div className="grid grid-cols-1 gap-3">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">PDF URL</span>
                            </label>
                            <input type="text" name="PDFURL" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Note</span>
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

export default SubmitAssignment;