import React from "react";
import Gallery from "./Gallery";

const Carousel = ({providers}) => {

    return (
        <>
            <div className="pt-16 text-center grid grid-cols-3">
                <p className="text-4xl col-start-2 text-amber-400">TOP TRADERS</p>
                <p className="mt-10 col-start-2 text-center">MultiBank Group ranks traders based on their trading performance. Copy traders can select the best traders to copy, based on their capital and risk appetite.</p>
            </div>
            <div className="p-16">
                <Gallery providers={providers}/>
            </div>
        </>
    )
}

export default Carousel;