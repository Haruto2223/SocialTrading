import Navbar from "../components/dashboard/Navbar";
import SocialPanel from "../components/liveAccount/SocialPanel";
import PersonalInformation from "../components/liveAccount/PersonalInformation";
import PhoneVerify from "../components/liveAccount/PhoneVerify";
import CreatePassword from "../components/liveAccount/CreatePassword";
import Footer from "../components/liveAccount/Footer";

import { ClientRegister } from "../APIService/Service";
import React, {useState, useCallback} from "react";

const LiveAccount = () => {

    const [personal, setPersonal] = useState({firstName: '', lastName: '', email: '', category: ''});

    const personalChange = useCallback((data) => {
        const newData = JSON.parse(JSON.stringify(data));
        setPersonal(newData);
    }, [])

    const handleOnClick = () => ClientRegister(personal);

    return (
        <div className="bg-slate-200">
            <Navbar />
            <p className="text-center text-6xl text-[#000850]  py-10">OPEN A LIVE ACCOUNT</p>
            <div className="mx-auto w-1/2 rounded-xl shadow-xl bg-white px-5">
                <SocialPanel />
                <PersonalInformation change={personalChange} />
                <PhoneVerify />
                <CreatePassword />
                <div>
                    <div onClick={handleOnClick} className="mx-auto py-3 rounded-full w-1/5 bg-[#BB914A] hover:bg-[#A77520] duration-150 text-white text-3xl text-center uppercase">next</div>
                    <p className="text-slate-500 text-lg mt-5">
                        You will now be onboarded through MEX Atlantic Corporation Company No. 354945 is regulated by
                        the Cayman Islands Monetary Authority ("CIMA") (License Number: 1811316). MEX Atlantic is a part of MultiBank Group.
                    </p>
                </div>
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </div>
    )
}

export default LiveAccount;