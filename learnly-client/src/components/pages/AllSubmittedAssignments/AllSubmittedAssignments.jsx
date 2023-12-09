import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentList from "./AssignmentList";


const AllSubmittedAssignments = () => {
    const [assignment, setAssignment] = useState([]);

    useEffect(() => {
        axios.get(`https://learnly-server.vercel.app/submit-assignments?status=pending`)
            .then(res => {
                setAssignment(res.data)
            })
    }, [])

    return (
        <div>
            <div className="bg-primary">
                <div className="max-w-6xl mx-auto">
                    <div className=" py-20 items-center">
                        <div className="">
                            <h1 className=" text-white font-extrabold font-space text-4xl md:text-6xl">All Submitted Assignments</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-3 lg:mx-auto py-10">
                {
                    assignment.length == 0 ?
                        <div className="flex h-40 justify-center items-center">
                            <h2 className=" text-black font-extrabold font-space text-xl">No Pending Assignment Found</h2>
                        </div>
                        :
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                            {
                                assignment.map(card => <AssignmentList key={card._id} card={card}></AssignmentList>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllSubmittedAssignments;