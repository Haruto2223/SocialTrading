const PersonalInformation = () => {
    return (
        <div>
            <span className="text-2xl text-[#010D4B] font-bold">1. Personal Information <span className="text-red-600">*</span></span>
            <select className="w-full rounded-md border border-slate-300 p-5 text-2xl mt-7 focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md">
                <option>Individual Client</option>
                <option>Corporate Client</option>
            </select>
            <div className="flex my-5 text-2xl space-x-7">
                <input className="grow p-5 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md" placeholder="First Name*" />
                <input className="grow p-5 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md" placeholder="Last Name*" />
            </div>
            <div>
                <input className="w-full p-5 text-2xl border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md" type="email" placeholder="Email*" />
            </div>
        </div>
    )
}

export default PersonalInformation;