import React, { useState } from "react";
import { connect } from "react-redux";
import { setStrategy } from "../actions/copy";

const scaleText = "This option will compare Master trader ac equity size and client ac equity size and then it will multiply or divide the volume (adjust the lot size) and then trade. Example, Top trader ac is $5000 and he is trading 1.00 volume lot size. And Client Account size is 500$ so system will add 0.1 lot size in client ac when fund manager is trading 1.00 lot."
const fixedText = "Here client can select and write a Fix lot example he sau 0.1 lot fixed, then whatever the volume traded by the fund manager client will receive only 0.1 lot, even if fund manager is trading 0.05, client will still receive 0.1 lot"
const reverseText = "It means if fund manager is making a buy then system wil open a sell in client account"

const CopyConfirm = ({setStrategy}) => {
    const [selectedItem, setSelectedItem] = useState('');
    const [text, setText] = useState('');

    const handleOnClick = () => {
        setStrategy(selectedItem);
    }

    const handleChange = (e) => {
        setSelectedItem(e.target.value);
        switch(e.target.value)
        {
            case 'scale':
                setText(scaleText);
                break;
            case 'fixed':
                setText(fixedText);
                break;
            case 'reverse':
                setText(reverseText);
                break;
            default:
                break;
        }
    }

    return (
        <div className="bg-[#0c014b] py-[418px]">
            <div className="mx-auto bg-slate-200 px-20 py-20 max-w-screen-xl">
                <p className="text-center text-6xl text-[#010D4B]">Copy Strategy</p>
                <div className="mt-10 flex justify-between space-x-5">
                    <div className="bg-white text-center text-4xl max-w-[30%] flex-1 px-10 py-5">
                        <input onChange={handleChange} value="scale" name="selectStrategy" className="relative float-right mt-0.5 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid
                         border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full 
                         before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block 
                         after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 
                         checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary 
                         checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] 
                         hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] 
                         focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 
                         checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 
                         dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary" type="radio" />
                        <p className="mt-5">Auto Scale</p>
                    </div>
                    <div className="bg-white text-center text-4xl max-w-[30%] flex-1 px-10 py-5">
                        <input onChange={handleChange} value="fixed" name="selectStrategy" className="relative float-right mt-0.5 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid
                         border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full 
                         before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block 
                         after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 
                         checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary 
                         checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] 
                         hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] 
                         focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 
                         checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 
                         dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary" type="radio" />
                        <p className="mt-5">Fixed</p>
                    </div>
                    <div className="bg-white text-center text-4xl max-w-[30%] flex-1 px-10 py-5">
                        <input onChange={handleChange} value="reverse" name="selectStrategy" className="relative float-right mt-0.5 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid
                         border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full 
                         before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block 
                         after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 
                         checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary 
                         checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] 
                         hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] 
                         focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 
                         checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 
                         dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:checked:focus:border-primary" type="radio" />
                        <p className="mt-5">Reverse</p>
                    </div>
                </div>
                <p className="mt-10 text-2xl">{text}</p>
                {text ? <div onClick={handleOnClick} className="mt-10 p-5 hover:bg-[#BB914A] hover:cursor-pointer text-white text-center text-4xl font-bold uppercase max-w-[20%] mx-auto rounded-full bg-[#dba54f]">ok</div> : null}
            </div>
        </div>
    )
}

export default connect(null, {setStrategy})(CopyConfirm);