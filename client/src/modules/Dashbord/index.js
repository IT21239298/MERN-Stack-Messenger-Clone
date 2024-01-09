import React from "react";
import Avatar from "../../assets/avatar.svg"

const Dashbord = () => {
  return (
    <div className="w-screen flex">
        <div className="w-[25%]  h-screen bg-secondary">
            <div className="flex justify-center items-center my-8">
                <div className="border border-primary p-[2px] rounded-full"><img src={Avatar} width={75} height={75}/></div>
                <div className="ml-8">
                    <h3 className="text-2xl">Tutorial Dv</h3>
                    <p className="text-lg font-light">my account</p>
                </div>
            </div>
        </div>
        <div className="w-[50%] border h-screen"> </div>
        <div className="w-[25%] border h-screen"> </div>
    </div>
   
  )
  
};

export default Dashbord;
