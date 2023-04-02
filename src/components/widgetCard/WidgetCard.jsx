import ReturnSection from "./ReturnSection";
import TabPanel from "./TabPanel";

const WidgetCard = () => {
    return (
        <div className="bg-white my-20 relative shadow-md rounded-3xl w-full md:w-5/6 mx-auto border border-gray-200">
            <div className="flex justify-center">
                <img src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" className="rounded-full absolute -top-24 w-48 h-48 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
            </div>

            <div className="mt-32 text-center">
                <h1 className="font-bold text-5xl text-amber-500">AK47</h1>
                <p className="text-3xl text-gray-400 font-medium mt-10">Saudi Arabia</p>
                <button className="my-10 px-10 py-5 rounded-full border border-amber-400 text-2xl font-bold hover:bg-black hover:text-white">Copy</button>
            </div>
            <div>
                <ReturnSection />
            </div>
            <div>
                <TabPanel />
            </div>
        </div>
    )
}

export default WidgetCard;