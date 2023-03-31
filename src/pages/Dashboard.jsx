import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/dashboard/Navbar'
import WorkContext from "../components/dashboard/WorkContext";
import BreadCrumb from "../components/dashboard/Carousel";

const DashBoard = () => {
    return (
        <>
            <Navbar />
            <WorkContext />
            <BreadCrumb />
            <div className="text-center pb-20">
                <Link className="bg-amber-600 text-4xl text-white hover:text-purple-800 rounded-full p-5" to="/statistics" >View leaderboard</Link>
            </div>
        </>
    )
}

export default DashBoard;