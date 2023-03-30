import ContextCard from "./ContextCard";


const WorkContext = () => {
    return (
        <div className="bg-slate-200 py-10">
            <p className="text-4xl text-amber-400 text-center mt-20">HOW DOES IT WORK?</p>
            <p className="text-center mt-10">Become a copy trader in 3 simple steps</p>
            <div className="flex justify-evenly py-10">
                <ContextCard number={1} text='Join MultiBank Group by opening a live account'/>
                <ContextCard number={2} text='Select your favourite trader'/>
                <ContextCard number={3} text='Copy their trading strategy online'/>
            </div>
        </div>
    )
}

export default WorkContext;