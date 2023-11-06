import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddAssigment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleform = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const brandname = form.get("brandname");
        const price = form.get("price");
        const rating = form.get("rating");
        const type = form.get("type");
        const description = form.get("description");
        const photo = form.get("photo");
        const newProduct = { name, brandname, price, rating, type, description, photo }


        fetch('https://tastify-server.vercel.app/add-product', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <div className="mx-auto max-w-3xl py-20">
                <h1 className="text-center text-3xl font-bold pb-5 text-primary">Add Assignment</h1>
                <form onSubmit={handleform} className="mx-3">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Title</span>
                            </label>
                            <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Difficulty</span>
                            </label>
                            <select name="brandname" className="select select-bordered w-full">
                                <option disabled selected>What is the difficulty level?</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                            {/* <input type="text" name="brandname" placeholder="Type here" className="input input-bordered w-full " /> */}
                        </div>
                        <div className="form-control w-full ">
                            
                            <label className="label">
                                <span className="label-text text-black ">Due Date</span>
                            </label>
                            <DatePicker
                                className="input input-bordered w-full "
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            {/* <input type="text" name="price" placeholder="Type here" className="input input-bordered w-full " /> */}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Marks</span>
                            </label>
                            <input type="number" name="rating" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Subject</span>
                            </label>
                            <input type="text" name="type" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-black ">Thumbnail Image URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full col-span-2">
                            <label className="label">
                                <span className="label-text text-black ">Description</span>
                            </label>
                            <textarea style={{ height: '150px' }} className="input input-bordered pt-3" name="description" id="" cols="30" rows="10"></textarea>
                        </div>


                    </div>
                    <button className="btn btn-block mt-8 text-primary ">submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddAssigment;