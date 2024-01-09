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
            <div className="flex justify-center items-center my-8">
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
                      <div className=""><img src={img} width={60} height={60}/></div>
                      <div className="ml-8">
                          <h3 className="text-2xl">{name}</h3>
                          <p className="text-lg font-light txt-gray-600">{status}</p>
                      </div>
                  </div>
                    )
                  })
                }
              </div>
            </div>

        </div>
        <div className="w-[50%] border h-screen"> </div>
        <div className="w-[25%] border h-screen"> </div>
    </div>
   
  )
  
};

export default Dashbord;
