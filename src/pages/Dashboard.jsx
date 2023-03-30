import React from "react";
import Navbar from '../components/dashboard/Navbar'
import WorkContext from "../components/dashboard/WorkContext";
import BreadCrumb from "../components/dashboard/Carousel";

const DashBoard = () => {
    return (
        <div>
            <Navbar/>
            <WorkContext/>
            <BreadCrumb/>
            {/* <Navbar/> */}
        </div>
    )
}

export default DashBoard;