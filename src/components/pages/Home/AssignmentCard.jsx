import { Link } from "react-router-dom";


const AssignmentCard = ({ card }) => {
    const { title, marks, difficulty, subject, dueDate, _id } = card;
    return (
        <div className="card border border-primary p-0">
            <figure><img src={card.imgURL} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="badge badge-outline">{difficulty}</div>
                <h2 className="card-title font-space text-2xl">{title}</h2>
                <p className="text-left max-w-fit">Subject: {subject}</p>
                <p className="text-left max-w-fit">Marks: {marks}</p>
                {/* <p className="text-left max-w-fit">Difficulty: </p> */}
                <p className="text-left max-w-fit">Due Date: {dueDate}</p>
                <div className="card-actions justify-start">

                    <Link to={`/assignment/${_id}`}><button className=" border border-primary px-5 py-1 mt-3 rounded text-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;