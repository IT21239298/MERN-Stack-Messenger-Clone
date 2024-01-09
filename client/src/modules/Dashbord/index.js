import React from "react";
import Avatar from "../../assets/avatar.svg"

const Dashbord = () => {

  const contacts = [
    {
      name: 'John',
      status:'Availale',
      img:Avatar
    },
    {
      name: 'Mary',
      status:'Availale',
      img:Avatar
    },
    {
      name: 'Alexander',
      status:'Availale',
      img:Avatar
    },
    {
      name: 'Adam',
      status:'Availale',
      img:Avatar
    },
    {
      name: 'Amal',
      status:'Availale',
      img:Avatar
    },
    {
      name: 'Nipun ',
      status:'Availale',
      img:Avatar
    },
  
  ]
  return (
    <div className="w-screen flex">
        <div className="w-[25%]  h-screen bg-secondary">
            <div className="flex items-center my-8 mx-14">
                <div className="border border-primary p-[2px] rounded-full"><img src={Avatar} width={75} height={75}/></div>
                <div className="ml-8">
                    <h3 className="text-2xl">Tutorial Dv</h3>
                    <p className="text-lg font-light">my account</p>
                </div>
            </div>
            <hr/> 
            <div className="mx-14 mt-10">
              <div className="text-primary text-lg">Message</div>
              <div>
                {
                  contacts.map(({name,status,img}) => {
                    return(
                      <div className="flex  items-center py-8 border-b border-b-gray-300">
                        <div className="cursor-pointer flex items-center">
                      <div className=""><img src={img} width={60} height={60}/></div>
                      <div className="ml-8">
                          <h3 className="text-2xl">{name}</h3>
                          <p className="text-lg font-light txt-gray-600">{status}</p>
                      </div>
                  </div>
                  </div>
                    )
                  })
                }
              </div>
            </div>

        </div>
        <div className="w-[50%] h-screen bg-white flex flex-col items-center"> 
           <div className="w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14">
           <div className=""><img src={Avatar} width={60} height={60}/></div>
            <h3 className="text-lg font-semibold">Alexander</h3>
           </div>
        </div>
        <div className="w-[25%]  h-screen"> </div>
    </div>
   
  )
  
};

export default Dashbord;
