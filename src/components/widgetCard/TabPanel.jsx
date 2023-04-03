const TabPanel = () => {
    return (
        <>
            <ul className="flex list-none flex-row flex-wrap border-b-4 pl-0 text-center" role="tablist" data-te-nav-ref>
                <li role="presentation" className="flex-auto border-r-4 border-slate-400">
                    <a
                        href="#tabs-home01"
                        className="py-2 block px-7 pt-4 pb-3.5 text-2xl font-medium uppercase leading-tight text-neutral-500 focus data-[te-nav-active]:bg-slate-200 data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill"
                        data-te-target="#tabs-home01"
                        data-te-nav-active
                        role="tab"
                        aria-controls="tabs-home01"
                        aria-selected="true"
                    >Return</a>
                </li>
                <li role="presentation" className="flex-auto border-r-4 border-slate-400">
                    <a
                        href="#tabs-profile01"
                        className="focus:border-transparen py-2 block px-7 pt-4 pb-3.5 text-2xl font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:bg-slate-200 data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill"
                        data-te-target="#tabs-profile01"
                        role="tab"
                        aria-controls="tabs-profile01"
                        aria-selected="false"
                    >Trading</a>
                </li>
                <li role="presentation" className="flex-auto border-r-4 border-slate-400">
                    <a
                        href="#tabs-messages01"
                        className="py-2 block px-7 pt-4 pb-3.5 text-2xl font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:bg-slate-200  data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill"
                        data-te-target="#tabs-messages01"
                        role="tab"
                        aria-controls="tabs-messages01"
                        aria-selected="false"
                    >Equity</a>
                </li>
                <li role="presentation" className="flex-auto">
                    <a
                        href="#tabs-contact01"
                        className="py-2 block bg-transparent px-7 pt-4 pb-3.5 data-[te-nav-active]:bg-slate-200 data-[te-nav-active]:text-primary  text-2xl font-medium uppercase leading-tight text-neutral-500 focus dark:text-neutral-600"
                        data-te-toggle="pill"
                        data-te-target="#tabs-contact01"
                        role="tab"
                        aria-controls="tabs-contact01"
                        aria-selected="false"
                    >Info</a>
                </li>
            </ul>
            <div className="my-20">
                <div className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-home01"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tab01"
                    data-te-tab-active>
                    <p className="uppercase text-center text-5xl">return/period</p>
                    <p className="text-center text-xl mt-5">Information about the account's return changes over time</p>
                    <div className="flex space-x-10 m-20">
                        <div className="bg-slate-200 px-10 py-5 flex-1 text-center rounded-3xl max-w-[14%] ">
                            <p className="text-3xl text-[#BB914A]">2164.69%</p>
                            <p className="mt-2 text-sm">All time</p>
                        </div>
                        <div className="bg-slate-200 px-10 py-5 flex-1 text-center rounded-3xl max-w-[150px] break-words">
                            <p className="text-3xl text-[#BB914A]">0</p>
                            <p className="mt-2 text-sm">All time</p>
                        </div>
                        <div className="bg-slate-200 px-10 py-5 flex-1 text-center rounded-3xl">
                            <p className="text-3xl text-[#BB914A]">0</p>
                            <p className="mt-2 text-sm">All time</p>
                        </div>
                        <div className="bg-slate-200 px-10 py-5 flex-1 text-center rounded-3xl">
                            <p className="text-3xl text-[#BB914A]">0</p>
                            <p className="mt-2 text-sm">All time</p>
                        </div>
                        <div className="bg-slate-200 px-10 py-5 flex-1 text-center rounded-3xl">
                            <p className="text-3xl text-[#BB914A]">0</p>
                            <p className="mt-2 text-sm">All time</p>
                        </div>
                        <div className="bg-slate-200 px-10 py-5 flex-1 text-center rounded-3xl">
                            <p className="text-3xl text-[#BB914A]">0</p>
                            <p className="mt-2 text-sm">All time</p>
                        </div>
                        <div className="bg-slate-200 px-10 py-5 flex-1 text-center rounded-3xl">
                            <p className="text-3xl text-[#BB914A]">0</p>
                            <p className="mt-2 text-sm">All time</p>
                        </div>
                    </div>
                </div>
                <div className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-profile01"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab01">
                    Tab 2 content
                </div>
                <div className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-messages01"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab01">
                    Tab 3 content
                </div>
                <div className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                    id="tabs-contact01"
                    role="tabpanel"
                    aria-labelledby="tabs-contact-tab01">
                    Tab 4 content
                </div>
            </div>
        </>
    )
}

export default TabPanel;