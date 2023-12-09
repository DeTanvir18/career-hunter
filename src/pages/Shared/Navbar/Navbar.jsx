import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { motion } from 'framer-motion';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Successfully Logged Out!',
                    'successful'
                )
                navigate('/')
            })
            .then()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/alljobs">All Jobs</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to='/appliedjobs'>Applied Jobs</NavLink></li>
                <li><NavLink to="/addajob">Add A Job</NavLink></li>
                <li><NavLink to="/myjobs">My Jobs</NavLink></li>
            </>
        }
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>

    return (
        <div>
            <div>
                <div className="bg-[#ebebeb]">
                    <nav className="navbar max-w-[1320px]  mx-auto mt-0 lg:mt-3 mb-20 lg:mb-0 p-2">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden bg-white me-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                                <ul tabIndex={0} className="dropdown-content text-sky-500 font-medium mt-3 z-[1] space-y-2 p-2 rounded-box w-52">
                                    {navLinks}
                                </ul>
                            </div>
                            <div>
                                <Link to='/'><img src="https://i.ibb.co/XZqkyCg/careerhunts-logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="navbar-center hidden md:flex">

                        </div>
                        <div className="navbar-end">
                            {
                                user ?
                                    <>
                                        <div>
                                            <div className="flex flex-col justify-center items-center text-[9px] md:text-[12px]">
                                                <div data-tooltip-placement="left" className="tooltip tooltip-left lg:tooltip-top" data-tip={user?.displayName}>
                                                    {
                                                        user.photoURL ?
                                                            <img src={user?.photoURL} alt="user" className="rounded w-10 md:w-12" />
                                                            :
                                                            <img src="https://i.postimg.cc/tgVxRSf8/u.jpg" alt="user" className="rounded-full w-10 md:w-12 block" />
                                                    }
                                                </div>
                                                <div className="text-white">
                                                    <button onClick={handleSignOut} className="btn btn-xs text-[10px] lg:text-[13px] bg-black rounded-md text-sky-500">Log Out</button>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                    :
                                    <>
                                        <div className="flex flex-col justify-center items-center">
                                            <img src="https://i.postimg.cc/tgVxRSf8/u.jpg" alt="user" className="rounded w-10 md:w-12 block" />
                                            <button className="text-[10px] lg:text-[13px] rounded-md p-1 text-sky-500"><Link to="/login">Login</Link></button>
                                        </div>
                                    </>
                            }
                        </div>
                    </nav>
                    <nav className="max-w-[1320px] mx-auto mb-20 lg:mb-0 p-2">
                        <div className="hidden lg:flex lg:flex-col justify-center items-center gap-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 2 }}
                                transition={{ duration: 3 }}
                            >
                                <ul className="flex gap-4 font-medium p-4 text-white bg-[#3977b6] border rounded shadow-xl ">
                                    {navLinks}
                                </ul>
                            </motion.div>
                            <form className="ps-2 md:ps-0">
                                <input className="border p-4 rounded-l-lg pe-8 md:pe-20 shadow mb-1" style={{ background: 'white' }} type="text" name="search" id="" placeholder="Search Here..." />
                                <input className="bg-[#2a6bab] text-white font-semibold px-6 py-[17px] rounded-r-lg" type="submit" value="Search" />
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;