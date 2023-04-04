import React, {useState, useEffect} from "react";

const CreatePassword = ({change}) => {
    const [password, setPassword] = useState('');
    useEffect(() => {
        change(password);
    }, [password, change])

    const passwordOnChange = (e) => setPassword(e.target.value);
    return (
        <div className="py-5">
            <p className="text-2xl text-[#010D4B] font-bold">2. Create Password <span className="text-red-600">*</span></p>
            <input placeholder="Password*" value={password} onChange={passwordOnChange} className="my-5 w-full px-3 border border-slate-200 py-5 focus:outline-none focus:border-sky-500 text-2xl shadow-md" type="password" />
            <p className="text-slate-500 text-xl mt-5">By clicking Next, I acknowledge that I have read, understood and agree to the Client Agreement and give my consent for MultiBank Group to contact me.</p>
        </div>
    )
}

export default CreatePassword;