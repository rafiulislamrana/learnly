import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/svgviewer-png-output (1).png"
import avatar from "../../../assets/cat.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)

    const handleLogout = () => {
        logOut()
        .then(res => {
            Swal.fire('You Logged Out Successfully!');
            console.log(res)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar py-5">
                <div className="navbar-start w-1/2">
                    <NavLink className="btn btn-ghost font-pacifico normal-case text-4xl lg:text-5xl text-primary pl-0" to={"/"}><img className=" w-40" src={logo} alt="" /></NavLink>
                </div>


                <div className="navbar-end w-1/2 items-center">
                    {
                        user ? <div className="dropdown dropdown-end h-12">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user ? <>
                                            {
                                                user.photoURL ? <img src={user.photoURL} /> : <img src={avatar} />
                                            }
                                        </> : <img src={avatar} />
                                    }
                                </div>
                            </label>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white text-black rounded-box w-52 text-left">
                                <div className="flex flex-col gap-2 pb-2">
                                    {
                                        user.displayName ? <span>{user.displayName}</span> : <span>Anonymous</span>
                                    }
                                    <span className="text-[#6f6f6f]">{user?.email}</span>
                                </div>
                                <hr />

                                <div className="flex flex-col gap-3 py-2">
                                    <Link className=" hover:text-primary" ><li>Create Assignment</li></Link>

                                    <Link className=" hover:text-primary" ><li>My Assignments</li></Link>

                                    <Link className=" hover:text-primary" ><li>All Assignments</li></Link>
                                </div>

                                <hr />

                                <div className="flex flex-col gap-3 py-2">
                                    <Link className=" hover:text-primary" ><li>FAQ</li></Link>

                                    <Link className=" hover:text-primary" ><li>About Us</li></Link>

                                    <Link className=" hover:text-primary" ><li>Contact Us</li></Link>
                                </div>

                                <hr />

                                <Link onClick={handleLogout} className="pt-2 hover:text-primary" ><li>Logout</li></Link>

                            </ul>

                        </div>
                            :

                            <div className="flex gap-3 items-center">
                                <Link to="/login"><button className="text-md px-3 py-2 text-black font-space">Log In</button></Link>
                                <Link to="/registration"><button className="text-md bg-primary px-5 py-2 rounded-3xl text-white font-space">Register</button></Link>
                                <div className="dropdown dropdown-end z-10">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="nonb" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                    </label>
                                    {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-primary text-white rounded-box w-52">
                                        <NavLink to={"/"} className="hover:text-black"><li>Home</li></NavLink>
                                        <NavLink className="pt-3 hover:text-black" to={"/add-product"}><li>Add Product</li></NavLink>
                                    </ul> */}
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white text-black rounded-box w-52 text-left">

                                        <div className="flex flex-col gap-3 py-2">
                                            <Link className=" hover:text-primary" ><li>Create Assignment</li></Link>

                                            <Link className=" hover:text-primary" ><li>All Assignments</li></Link>

                                        </div>
                                        <hr />

                                        <div className="flex flex-col gap-3 pt-2">
                                            <Link className=" hover:text-primary" ><li>FAQ</li></Link>

                                            <Link className=" hover:text-primary" ><li>About Us</li></Link>

                                            <Link className=" hover:text-primary" ><li>Contact Us</li></Link>
                                        </div>

                                    </ul>
                                </div>
                            </div>
                    }





                </div>
            </div>
        </div>
    );
};

export default Header;