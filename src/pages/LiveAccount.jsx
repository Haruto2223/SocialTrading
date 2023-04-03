import Navbar from "../components/dashboard/Navbar";
import SocialPanel from "../components/liveAccount/SocialPanel";
import PersonalInformation from "../components/liveAccount/PersonalInformation";
import PhoneVerify from "../components/liveAccount/PhoneVerify";
import CreatePassword from "../components/liveAccount/CreatePassword";
import Footer from "../components/liveAccount/Footer";

const LiveAccount = () => {
    return (
        <div className="bg-slate-200">
            <Navbar/>
            <p className="text-center text-6xl text-[#000850] py-10">OPEN A LIVE ACCOUNT</p>
            <div className="mx-auto w-1/2 rounded-xl shadow-xl bg-white px-5">
                <SocialPanel/>
                <PersonalInformation/>
                <PhoneVerify/>
                <CreatePassword/>
            </div>
            <div className="mt-20">
                <Footer/>
            </div>
        </div>
    )
}

export default LiveAccount;