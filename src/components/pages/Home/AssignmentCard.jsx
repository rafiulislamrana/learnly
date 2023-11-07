

const AssignmentCard = ({ card }) => {
    const {title, description} = card;
    return (
        <div className="card border border-primary p-0">
            <figure><img src={card.imgURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;