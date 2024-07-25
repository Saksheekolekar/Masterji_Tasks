import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className="sticky bg-transparenttop-0 z-50   mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <nav className="bg-orange-600 shadow-lg shadow-slate-800 hover:shadow-gray-50/80 rounded-2xl border-zinc-50 px-4 lg:px-6 py-2.5
                               ">
                    <div className="flex flex-col justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <img
                                src="./chai.png "
                                className="h-12 border-b-2  shadow-lg  border-blue-400 rounded-3xl"
                                alt="Logo"
                            />
                        </Link>
                        <div className="flex ml-4 items-center ">
                           <h1 className='text-white text-2xl font-bold'>Chai Aur Code</h1>
                        </div>
                        <div className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex text-black  flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                
                                <li>
                                    <NavLink
                                        to="/OTPForm"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100 hover:text-white lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >OtpForm
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/CourseList"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100 hover:text-white lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        CourseList
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/Batches"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-gray-700"} border-b border-gray-100 hover:text-white lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Batches
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </nav>
                
            </header>
            <div>
                
            </div>
        </>
    );
}
