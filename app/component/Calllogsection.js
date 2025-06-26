import React from 'react'

const Calllogsection = ({ classname = "" }) => {
  return (
    <div className={`${classname} flex maincolr flex-col items-center`}>
      <div className='w-full h-[10%] flex justify-between'>
        <div className='w-[30%] text-4xl h-full flex justify-center items-center text-white '><h1>Chat</h1></div>
        <div className=' flex w-[30%] h-full'>
          <div className='w-[100%] h-full flex justify-center items-center '>
            <img src="/image/call-add.svg" className='w-[70%] h-[70%]'></img>
          </div>

        </div>
      </div>
      <input type='text ' className='w-[90%] h-[5%] bg-gray-600 rounded-xl mt-[2%]' placeholder="Search Or Start A New Chat"></input>
      <div className='w-full h-[15%] '>
        <div className='w-full h-[30%] flex items-center '>
          <h1 className=' ml-[2rem] text-xl font-bold text-white'>favorites</h1>

        </div>
        <div className="flex items-center w-full h-[70%]">
          <div className="aspect-square w-16 sm:w-20 md:w-24 lg:w-28 bg-gray-700 rounded-full flex justify-center items-center ml-[2rem]">
            <img src="/image/favorite-user.svg" className="w-1/2 h-1/2" alt="Favorite User" />
          </div>
          <h1 className="ml-[1rem] text-2xl text-white font-bold">Add favorites</h1>
        </div>

      </div>
      <div className=' flex flex-col items-center h-[70%] w-full '>
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

                <img src="\image\outgoingvideocall.svg" className='w-[10%] h-[50%]'></img>
                <h1>imcoming call</h1></div>
            </div>
          </div>
        </div>





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

                <img src="\image\outgoingvideocall.svg" className='w-[10%] h-[50%]'></img>
                <h1>imcoming call</h1></div>
            </div>
          </div>
        </div>





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

                <img src="\image\outgoingvideocall.svg" className='w-[10%] h-[50%]'></img>
                <h1>imcoming call</h1></div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Calllogsection;
