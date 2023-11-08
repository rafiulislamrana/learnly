import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AssignmentCard from "../Home/AssignmentCard";
import { AuthContext } from "../../../providers/AuthProvider";

const MyAssignments = () => {
    const { user } = useContext(AuthContext)
    const [assignment, setAssignment] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/my-assignments?email=${user.email}`, {
            withCredentials: true
        })
            .then(res => {
                setAssignment(res.data.reverse())
            })
    }, [])

    return (
        <div>
            <div className="bg-primary">
                <div className="max-w-6xl mx-auto">
                    <div className=" py-20 items-center">
                        <div className="">
                            <h1 className=" text-white font-extrabold font-space text-4xl md:text-6xl">My Assignments</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-3 lg:mx-auto py-10">
                {
                    assignment.length == 0 ? 
                    <div className="flex h-40 justify-center items-center">
                        <h2 className=" text-black font-extrabold font-space text-xl">No Assignment Found</h2>
                    </div> 
                    : 
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                        {
                            assignment.map(card => <AssignmentCard key={card._id} card={card}></AssignmentCard>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default MyAssignments;