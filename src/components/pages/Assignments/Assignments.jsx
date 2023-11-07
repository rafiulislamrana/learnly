import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "../Home/AssignmentCard";


const Assignments = () => {
    const [assignment, setAssignment] = useState([]);
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const viewCount = 6;

    const numOfPages = Math.ceil(count/viewCount)

    const pages = [...Array(numOfPages).keys()];
    console.log(pages)

    useEffect(() => {
        axios.get(`http://localhost:5000/assignmentsPage?page=${currentPage}&size=${viewCount}`)
            .then(res => {
                setAssignment(res.data.reverse())
            })

        axios.get("http://localhost:5000/assignment-count")
        .then(res => setCount(res.data.count))
    }, [currentPage])
    console.log(currentPage)
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
                <div className="flex gap-2 justify-center py-10">
                    {
                        pages.map((page, idx) => <button className="px-4 rounded py-1 bg-primary text-white" onClick={() => setCurrentPage(page)} key={idx}>{page + 1}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Assignments;