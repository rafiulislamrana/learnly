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

            <div className=" py-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl font-space font-extrabold">FAQ</h2>
                    <div className="pt-8">
                        <div className="collapse collapse-arrow border-y rounded-none border-black">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title font-space text-2xl font-medium text-left">
                            How do I create a study group?
                            </div>
                            <div className="collapse-content text-left">
                                <p>Creating a study group is easy. After signing in, go to the Groups section, click on Create Group, provide the necessary details, such as the groups name, description, and privacy settings, and invite fellow learners to join. You can also specify the courses or subjects the group will cover.</p>
                            </div>
                        </div>
                        
                        <div className="collapse collapse-arrow border-b rounded-none border-black">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title font-space text-2xl font-medium text-left">
                            How can I find and join a study group?
                            </div>
                            <div className="collapse-content text-left">
                                <p>To find and join a study group, go to the Groups section and browse through the available groups. You can search for specific subjects or courses. When you find a group that interests you, simply click Join Group. Group administrators will receive your request and can approve it, allowing you to start collaborating with your peers.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow border-b rounded-none border-black">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title font-space text-2xl font-medium text-left">
                            What kind of study materials can I share in a group?
                            </div>
                            <div className="collapse-content text-left">
                                <p>You can share a wide range of study materials within your group, including lecture notes, study guides, documents, links to online resources, and more. The platform supports text-based discussions and file uploads, making it easy to collaborate and exchange knowledge.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow border-b rounded-none border-black">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title font-space text-2xl font-medium text-left">
                            How can I schedule and participate in group study sessions?
                            </div>
                            <div className="collapse-content text-left">
                                <p>Scheduling and participating in group study sessions is a breeze. Group members can propose study sessions with specific dates and times. Once a session is scheduled, group members can join the virtual meeting room, which may include video conferencing or chat tools. You can collaborate, discuss, and learn together in real-time, ensuring productive study sessions for all members.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;