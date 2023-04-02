const ReturnSection = () => {
    return (
        <div className="bg-slate-100 p-20 flex items-center space-x-14">
            <div className="bg-white p-10 text-3xl flex-1 rounded-md">
                <div>Return (total)</div>
                <div className="float-right text-amber-400 text-4xl pr-7">14580.3%</div>
            </div>
            <div className="bg-white p-10 text-3xl flex-1 rounded-md">
                <div>Return (ID)</div>
                <div className="float-right text-amber-400 text-4xl pr-7">-1.52%</div>
            </div>
            <div className="bg-white p-10 text-3xl flex-1 rounded-md">
                <div>Rating</div>
                <div className="float-right text-amber-400 text-4xl pr-7">1938.045</div>
            </div>
            <div className="bg-white p-10 text-3xl flex-1 rounded-md">
                <div>Age (Days)</div>
                <div className="float-right text-amber-400 text-4xl pr-7">286</div>
            </div>
        </div>
    )
}

export default ReturnSection;