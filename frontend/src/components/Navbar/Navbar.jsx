import React from 'react';
import logoImage from "../../assets/Biopic.png";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import useLogout from '../../hooks/useLogout';
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
    const { authUser } = useAuthContext();
    const { loading, logout } = useLogout();
    return (
        <>
            <nav className="bg-white shadow-lg">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Link to="/"><img src={logoImage} alt="Logo" className="h-8" /></Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            {
                                authUser ? (
                                    // <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Logout</Link>
                                    <>
                                        <span className="text-gray-600">Welcome, {authUser.username}</span>
                                        {!loading ? (
                                            <BiLogOut className='w-6 h-6 text-black cursor-pointer' onClick={logout} />
                                        ) : (
                                            <span className='loading loading-spinner'></span>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Login</Link>
                                        <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Signup</Link>
                                    </>

                                )
                            }

                        </div>
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Navbar