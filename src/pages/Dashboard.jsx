import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import WorkContext from "../components/dashboard/WorkContext";
import Carousel from "../components/dashboard/Carousel";
import { getAllProviders } from "../actions/trader";
import { connect } from "react-redux";

const DashBoard = ({getAllProviders, allProviders}) => {

    useEffect(() => {
        getAllProviders();
    }, [getAllProviders]);
    return (
        <>
            <WorkContext />
            <Carousel providers={allProviders} />
            <div className="text-center pb-20">
                <Link className="bg-[#bb914a] text-4xl text-white hover:text-purple-800 rounded-full p-5" to="/statistics" >View leaderboard</Link>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    allProviders: state.provider.allProviders
})

export default connect(mapStateToProps, {getAllProviders})(DashBoard);