import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { Link } from "react-router-dom";

const Navbar = ({ logout, isAuthenticated }) => {

    return (
        <nav className="bg-[#000850] border-gray-200 px-2 sm:px-4 py-7 rounded">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <img src="https://multibankfx.com/public_files/images/header-footer/logos/MultibankFxShortLogo.svg?v2" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text">
                        {isAuthenticated ? (<>
                            <li>
                                <Link to="/statistics" className="py-2 pl-3 pr-4 text-white text-2xl rounded hover:text-[#BB914A]">LeaderBoard</Link>
                            </li>
                            <li>
                                <Link to="/sociallogin" className="py-2 pl-3 pr-4 text-white text-2xl rounded hover:text-[#BB914A]">Join Now</Link>
                            </li>
                            <li>
                                <div onClick={() => logout()} className="hover:cursor-pointer pl-3 pr-4 text-white text-2xl rounded hover:text-[#BB914A]">
                                    Logout
                                </div>
                            </li></>) : (<>
                                <li>
                                    <Link to="/register" className="py-2 pl-3 pr-4 text-white text-2xl rounded hover:text-[#BB914A]">Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="hover:cursor-pointer pl-3 pr-4 text-white text-2xl rounded hover:text-[#BB914A]">
                                        LogIn
                                    </Link>
                                </li></>)}

                    </ul>
                </div>
            </div>
        </nav>

    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar);