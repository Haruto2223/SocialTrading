import React, {useEffect, useState} from "react";
import Carousel from "./tip";

const imageArray = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg']

const BreadCrumb = () => {

    // const [array, setArray] = useState(imageArray);

    // useEffect(() => {
    //     setTimeout(() => {
    //         const newArray = ['', '', '', '', ''];
    //         imageArray.map((image, index) => {
    //             index === 0 ? newArray[4] = array[index] : newArray[index-1] = array[index];
    //         })
    //         setArray(JSON.parse(JSON.stringify(newArray)));
    //     }, 1000);
    // })

    console.log('render')

    return (
        <>
            <div className="pt-16 text-center grid grid-cols-3">
                <p className="text-4xl col-start-2 text-amber-400">TOP TRADERS</p>
                <p className="mt-10 col-start-2 text-center">MultiBank Group ranks traders based on their trading performance. Copy traders can select the best traders to copy, based on their capital and risk appetite.</p>
            </div>
            <div className="p-16 grid grid-cols-5">
                <Carousel/>
                {/* <img src={ array[0] }/>
                <img src={ array[1] }/>
                <img src={ array[2] }/>
                <img src={ array[3] }/>
                <img src={ array[4] }/> */}
            </div>
        </>
    )
}

export default BreadCrumb;