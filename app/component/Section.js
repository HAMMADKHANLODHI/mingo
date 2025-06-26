import React from 'react'

const Section = ({ classname = "" }) => {
  return (
    <div className={`${classname} flex maincolr flex-col items-center`}>
      <div className='w-full h-[10%] flex justify-between'>
        <div className='w-[30%] text-4xl h-full flex justify-center items-center text-white '><h1>Chat</h1></div>
        <div className=' flex w-[30%] h-full'>
          <div className='w-[50%] h-full  flex justify-center items-center'>
            <img src='/image/newchat.svg' className='w-[50%] h-[50%] '></img>


          </div>
          <div className='w-[50%] h-full  flex justify-center items-center'>
            <img src='/image/filter.svg' className='w-[50%] h-[50%] '></img>


          </div>
        </div>
      </div>
      <input type='text ' className='border-b-[2px] border-amber-50 w-[90%] h-[5%] bg-gray-600 rounded-xl mt-[2%]' placeholder="Search Or Start A New Chat"></input>
      <div className=' flex flex-col items-center h-[85%] w-full '> 
        <div className='flex  w-[97%] h-[7rem] hoversectioncolor rounded-2xl'>
          <div className='flex justify-center items-center w-[20%] h-full'>
            <div className='w-[80%] h-[90%]  p-[2%] rounded-full'>
              <img src='/image/hammadpix.jpeg' className=' border-[5px] max-w-full max-h-full h-auto object-cover border-green-900 rounded-full'></img>

            </div>


          </div>
          <div className='w-[80%] rounded-2xl h-full ' >
            <div className='flex  w-full  h-[50%] '>
              <div className='w-[70%]  h-full  flex text-lg text-white font-bold  items-center'><h1>hammad ul haq </h1></div>
              <div className='w-[30%]  h-full  flex text-lg text-white font-bold  items-center'><h1>20/11/2025 </h1></div>
            </div>
            <div className='flex  w-full  h-[50%] '>
              <div className='w-full  h-full  flex text-base text-white '>

                
                <h1>Hello How are you ? </h1></div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Section;
