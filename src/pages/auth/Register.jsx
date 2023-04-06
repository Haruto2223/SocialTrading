import PersonalInformation from "../../components/liveAccount/PersonalInformation";
import CreatePassword from "../../components/liveAccount/CreatePassword";
import Footer from "../../components/liveAccount/Footer";

import { register } from "../../actions/auth";
import React, { useState, useCallback } from "react";
import { Navigate } from "react-router";
import { connect } from "react-redux";

const Register = ({ register, isAuthenticated }) => {

    const [personal, setPersonal] = useState({ firstName: '', lastName: '', email: '', category: '', password: '' });

    const personalChange = useCallback((data) => {
        setPersonal(prev => {
            return { ...prev, ...data };
        });
    }, [])

    const passwordChange = useCallback((password) => {
        setPersonal(prev => {
            return { ...prev, password };
        })
    }, [])

    const handleOnClick = async () => {
        register(personal)
    };

    if(isAuthenticated) {
       return <Navigate to="/dashboard"/>
    }
    return (
        <div className="bg-slate-200">
            <p className="text-center text-6xl text-[#000850]  py-16">OPEN A LIVE ACCOUNT</p>
            <div className="mx-auto w-1/2 rounded-xl shadow-xl bg-white p-10">
                <PersonalInformation change={personalChange} />
                <CreatePassword change={passwordChange} />
                <div>
                    <div onClick={handleOnClick} className="mx-auto py-3 rounded-full w-1/5 bg-[#BB914A] hover:cursor-pointer hover:bg-[#A77520] duration-150 text-white text-3xl text-center uppercase">Register</div>
                    <p className="text-slate-500 text-lg mt-5">
                        You will now be onboarded through MEX Atlantic Corporation Company No. 354945 is regulated by
                        the Cayman Islands Monetary Authority ("CIMA") (License Number: 1811316). MEX Atlantic is a part of MultiBank Group.
                    </p>
                </div>
            </div>
            <div className="p-20">
                <Footer />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps, { register })(Register);