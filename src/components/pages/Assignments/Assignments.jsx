import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "../Home/AssignmentCard";


const Assignments = () => {
    const [assignment, setAssignment] = useState([]);
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0);
    const [sort, setSort] = useState("")
    const viewCount = 6;

    const numOfPages = Math.ceil(count / viewCount)

    let pages = [...Array(numOfPages).keys()];

    useEffect(() => {
        axios.get(`https://learnly-server.vercel.app/assignmentsPage?page=${currentPage}&size=${viewCount}`)
            .then(res => {
                setAssignment(res.data.reverse())
            })
        
        axios.get("https://learnly-server.vercel.app/assignment-count")
            .then(res => setCount(res.data.count))
    }, [currentPage])

    const handleSort = (e) => {
        const value = e.target.value;
        setSort(value)
        
        axios.get(`https://learnly-server.vercel.app/assignmentsPage?sort=${value}`)
        .then(res => {
            setAssignment(res.data.reverse())
        })
        
    }
    return (
        <div>
            <div className="bg-primary">
                <div className="max-w-6xl mx-auto">
                    <div className=" py-20 items-center">
                        <div className="">
                            <h1 className=" text-white font-extrabold font-space text-4xl md:text-6xl">All Assignments</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 mx-3 lg:mx-auto">
                <select onChange={handleSort} className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Sort by Difficulty</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
            </div>

            <div className="max-w-6xl mx-3 lg:mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {
                        assignment.map(card => <AssignmentCard key={card._id} card={card}></AssignmentCard>)
                    }
                </div>
                <div className="flex gap-2 justify-center py-10 pagination">
                    {
                        sort ? <></>
                        :
                        pages.map((page, idx) => <button className={currentPage == page? "selected px-4 rounded py-1 bg-primary text-white" : "px-4 rounded py-1 bg-primary text-white"} onClick={() => setCurrentPage(page)} key={idx}>{page + 1}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Assignments;