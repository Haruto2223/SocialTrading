import React, {useState, useEffect} from "react";

const PersonalInformation = ({change}) => {
    const [category, setCategory] = useState('individual');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        change({category, firstName, lastName, email});
    }, [category, firstName, lastName, email, change])

    const categoryOnChange = e => setCategory(e.target.value);
    const firstNameOnChange = e => setFirstName(e.target.value);
    const lastNameOnChange = e => setLastName(e.target.value);
    const emailOnChange = e => setEmail(e.target.value);

    return (
        <div>
            <span className="text-2xl text-[#010D4B] font-bold">1. Personal Information <span className="text-red-600">*</span></span>
            <select name="category" value={category} onChange={categoryOnChange} className="w-full rounded-md border border-slate-300 p-5 text-2xl mt-7 focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md">
                <option value="individual">Individual Client</option>
                <option value="corporate">Corporate Client</option>
            </select>
            <div className="flex my-5 text-2xl space-x-7">
                <input name="firstName" value={firstName} onChange={firstNameOnChange} className="grow p-5 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md" placeholder="First Name*" />
                <input name="lastName" value={lastName} onChange={lastNameOnChange} className="grow p-5 border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md" placeholder="Last Name*" />
            </div>
            <div>
                <input name="email" value={email} onChange={emailOnChange} className="w-full p-5 text-2xl border border-slate-300 rounded-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 shadow-md" type="email" placeholder="Email*" />
            </div>
        </div>
    )
}

export default PersonalInformation;