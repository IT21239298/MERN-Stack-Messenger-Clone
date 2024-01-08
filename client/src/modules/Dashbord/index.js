import React from "react";
import Avatar from "../../assets/avatar.svg"

const Dashbord = () => {
  return (
    <div className="w-screen flex">
        <div className="w-[25%] border border-black h-screen bg-secondary">
            <div className="flex justify-center items-center">
                <img src={Avatar} width={75} height={75}/>
                <div>
                    <h3>Tutorial Dv</h3>
                    <p>my account</p>
                </div>
            </div>
        </div>
        <div className="w-[50%] border border-black h-screen"> </div>
        <div className="w-[25%] border border-black h-screen"> </div>
    </div>
   
  )
  
};

export default Dashbord;