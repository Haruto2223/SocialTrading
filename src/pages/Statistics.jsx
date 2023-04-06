import Banner from "../components/statistics/Banner";
import MainBoard from "../components/statistics/MainBoard";
import React, {useEffect} from "react";
import { connect } from "react-redux";
import { findAllUsers } from "../actions/clients";

const Statistics = ({findAllUsers}) => {
    useEffect(() => {
        findAllUsers();
    }, [findAllUsers])

    return (
        <>
            <Banner/>
            <MainBoard/>
        </>
    )
}

export default connect(null, {findAllUsers})(Statistics);