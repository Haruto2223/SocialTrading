const PhoneVerify = () => {
    return (
        <div className="mt-5">
            <p className="text-2xl text-[#010D4B] font-bold">2.Verify your phone number <span className="text-red-500">*</span></p>
            <div className="w-[30%] mt-5">
                <div className="bg-[#BB914A] rounded-md text-center text-2xl text-white py-4">Send Again</div>
                <div className="mt-5 flex justify-start space-x-5">
                    <input className="border border-slate-200 w-14 h-14 rounded-md"/>
                    <input className="border border-slate-200 w-14 h-14 rounded-md"/>
                    <input className="border border-slate-200 w-14 h-14 rounded-md"/>
                    <input className="border border-slate-200 w-14 h-14 rounded-md"/>
                    <input className="border border-slate-200 w-14 h-14 rounded-md"/>
                    <input className="border border-slate-200 w-14 h-14 rounded-md"/>
                </div>
            </div>
        </div>
    )
}

export default PhoneVerify;