const SocialPanel = () => {
    return (
        <div className="py-10">
            <div></div>
            <p className="text-center text-3xl text-slate-500">Sign up with Social</p>
            <div className="flex justify-center space-x-10 text-2xl mt-10">
                <div className="px-10 py-5 text-center border border-[#BB914A] flex space-x-5 hover:bg-[#BB914A] hover:text-white duration-150">
                    <img src="https://multibankfx.com/public_files/images/account/live-account/icon-google.svg" className="hover:text-white" alt="google" />
                    <span>Sign up with Google</span>
                </div>
                <div className="px-10 py-5 text-center border border-[#BB914A] flex space-x-5 hover:bg-[#BB914A] hover:text-white duration-150">
                    <img src="https://multibankfx.com/public_files/images/account/live-account/icon-linkedin.svg" alt="google" />
                    <span>Sign up with Linkedin</span>
                </div>
                <div className="px-10 py-5 text-center border border-[#BB914A] flex space-x-5 hover:bg-[#BB914A] hover:text-white duration-150">
                    <img src="https://multibankfx.com/public_files/images/account/live-account/icon-facebook.svg" alt="google" />
                    <span>Sign up with Facebook</span>
                </div>
            </div>
            <div className="grid grid-cols-10 mt-5">
                <div className="col-span-4 border-b-2 border-slate-400 "></div>
                <div className="col-span-2 text-center text-2xl relative top-3"><p>or</p></div>
                <div className="col-span-4 border-b-2 border-slate-400"></div>
            </div>
            <div className="text-center mt-10 text-2xl text-slate-600">
                Please fill the below form in 3 easy steps, it will only take 1-2 minutes to start trading
            </div>
        </div>
    )
}

export default SocialPanel;