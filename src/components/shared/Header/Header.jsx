import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/svgviewer-png-output (1).png"

const Header = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar py-5">
                <div className="navbar-start w-1/2">
                    <NavLink className="btn btn-ghost font-pacifico normal-case text-4xl lg:text-5xl text-primary " to={"/"}><img className=" w-40" src={logo} alt="" /></NavLink>
                </div>


                <div className="navbar-end w-1/2 items-center">

                    <div className="dropdown dropdown-end z-10">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="nonb" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-primary text-white rounded-box w-52">
                            <NavLink to={"/"} className="hover:text-black"><li>Home</li></NavLink>
                            <NavLink className="pt-3 hover:text-black" to={"/add-product"}><li>Add Product</li></NavLink>
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {/* {
                                    user ? <>
                                        {
                                            user.photoURL ? <img src={user.photoURL} /> : <img src={avatar} />
                                        }
                                    </> : <img src={avatar} />
                                } */}
                            </div>
                        </label>

                        {/* {
                            user ? <>

                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-primary text-white rounded-box w-52">
                                    {
                                        user.displayName ? <span className="badge bg-primary text-white">{user.displayName}</span> : <span className="badge">Anonymous</span>
                                    }

                                    <Link className="pt-3 hover:text-black" onClick={logOut}><li>Logout</li></Link>
                                </ul>
                            </> :
                                <>

                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-primary text-white rounded-box w-52">
                                        <Link to={"/login"} className="hover:text-black"><li>Login</li></Link>
                                    </ul>
                                </>
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;