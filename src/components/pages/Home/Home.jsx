import heroimg from "../../../assets/front.webp"

const Home = () => {
    return (
        <div>
            <div className="bg-primary">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-12 pt-20 gap-10 items-center">
                        <div className="col-span-7">
                            <h1 className=" text-white font-extrabold font-space text-6xl">A-Plus Homework Help For All Students</h1>
                            <p className="text-white pt-5">Get help from others in any academic field. We offer support for over 100 courses and programs, ensuring that your educational needs are covered. Join our community of learners today and experience collaborative studying like never before.</p>
                        </div>
                        <div className="col-span-5">
                            <img src={heroimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;