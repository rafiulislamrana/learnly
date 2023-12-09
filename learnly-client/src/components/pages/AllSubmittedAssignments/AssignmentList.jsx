import { Link } from "react-router-dom";


const AssignmentList = ({ card }) => {
    const { title, marks, name, status, assignmentId } = card;
    return (
        <div className="border border-primary rounded py-5 px-3">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                <div className=" md:w-1/2 flex flex-col items-center md:items-start ">
                    <div className="badge badge-primary mb-1 badge-outline">{status}</div>
                    <h2 className="card-title text-left font-space text-lg">{title}</h2>
                    <p className="text-left">Marks: {marks}</p>
                </div>
                <div className="">
                    <p className="md:text-left text-xs">Submitted by</p>
                    <h4 className="card-title text-left font-space text-base">{name}</h4>
                </div>
                <div>
                    <Link to={`/pending-assignments/${assignmentId}`}><button className=" border border-primary px-5 py-1 rounded text-primary">Give Mark</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AssignmentList;