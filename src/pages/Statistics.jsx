import Banner from "../components/statistics/Banner";
import MainBoard from "../components/statistics/MainBoard";
import React, {useEffect} from "react";
import { connect } from "react-redux";

const Statistics = () => {
    // useEffect(() => {
    //     findAllUsers();
    // }, [findAllUsers])

    return (
        <>
            <Banner/>
            <MainBoard/>
        </>
    )
}

export default connect(null, {})(Statistics);