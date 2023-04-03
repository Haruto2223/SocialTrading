const CreatePassword = () => {
    return (
        <div className="py-5">
            <p className="text-2xl text-[#010D4B] font-bold">3. Create Password <span className="text-red-600">*</span></p>
            <input className="my-5 w-full px-3 border border-slate-200 py-5 focus:outline-none focus:border-sky-500 text-2xl shadow-md" type="password" />
            <p className="text-slate-500 text-xl mt-5">By clicking Next, I acknowledge that I have read, understood and agree to the Client Agreement and give my consent for MultiBank Group to contact me.</p>
            <div className="mx-auto py-3 rounded-full w-1/5 bg-[#BB914A] hover:bg-[#A77520] duration-150 text-white text-3xl text-center uppercase">next</div>
            <p className="text-slate-500 text-lg mt-5">
                You will now be onboarded through MEX Atlantic Corporation Company No. 354945 is regulated by
                the Cayman Islands Monetary Authority ("CIMA") (License Number: 1811316). MEX Atlantic is a part of MultiBank Group.
            </p>
        </div>
    )
}

export default CreatePassword;