import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "../Home/AssignmentCard";


const Assignments = () => {
    const [assignment, setAssignment] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/assignments")
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
                            <h1 className=" text-white font-extrabold font-space text-6xl">All Assignments</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto py-10">
                <div className="grid grid-cols-3 gap-5 ">
                    {
                        assignment.map(card => <AssignmentCard key={card._id} card={card}></AssignmentCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Assignments;