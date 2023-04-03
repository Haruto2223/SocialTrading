import React from "react";

const Register = () => {
    return (
        <div className="py-8 px-8 md:max-w-4xl md:w-1/2 mx-auto mt-24 border border-black-400 bg-white rounded-xl shadow-lg space-y-2 ">
            <div className="text-center space-y-2 ">
                <div className="md:flex">
                    <div className="md:flex-2 md:border-r-2 text-align-center gap-2">
                        <p className="text-5xl text-center">
                            <span className="bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">MultiBank </span>
                            <span className="text-indigo-900" >Group</span>
                        </p>
                        <p className="text-4xl my-2 text-center">Subscription Registration</p>
                        <p className="text-center mb-2">Creating a new subscription</p>
                        <label className="block pr-6">
                            <select className="my-5 h-14  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Server">
                                <option value='MultiBank-Live-1'>MultiBank-Live-1</option>
                                <option value='MultiBank-Live-2'>MultiBank-Live-2</option>
                                <option value='MultiBank-MT5'>MultiBank-MT5</option>
                                <option value='MultiBank-Live-4'>MultiBank-Live-4</option>
                            </select>
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Select a server
                            </span>
                        </label>
                        <label className="block pr-6">
                            <input type="number" name="accountID" className="my-5 h-14  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Trading account" />
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Trading account ID
                            </span>
                        </label>
                        <label className="block pr-6">
                            <input type="password" name="password" className="my-5 h-14  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Password" />
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Trading account password
                            </span>
                        </label>
                        <label className="block pr-6">
                            <input type="email" name="email" className="my-5 h-14  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Provider" />
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Select an active provider
                            </span>
                        </label>
                        <label className="block pr-6">
                            <input type="email" name="email" className="my-5 h-14  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Offer" />
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                There are no public offers
                            </span>
                        </label>
                        <div className='text-center'>
                            <button className=" bg-purple-900 text-white w-40 h-10 mt-10 rounded ">Register</button>
                        </div>  
                    </div>
                    <div className="md:flex-1">
                        <h1 className="text-4xl text-center mb-2">Details</h1>
                        <p className="text-center">Information about the chosen provider and subscription conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;