import React from 'react'

const Statussection = ({ classname = "" }) => {
  return (
    <div className={`${classname} flex maincolr flex-col items-center`}>
      <div className='w-full h-[10%] flex justify-between'>
        <div className='w-[30%] text-4xl h-full flex justify-center items-center text-white '><h1>Status</h1></div>
        <div className=' flex w-[30%] h-full'>
          {/* <div className='w-[100%] h-full flex justify-center items-center '>
            <img src="/image/call-add.svg" className='w-[70%] h-[70%]'></img>
          </div> */}

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



      <div className='ml-[5%] mt-[1rem] w-[95%] h-[5%] text-xl flex items-center text-gray-400'><h1>Recent Updates </h1></div>



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
              <img src='/image/hammadpix.jpeg' className=' border-[5px] max-w-full max-h-full  h-auto object-cover border-green-900 rounded-full'></img>

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

export default Statussection;
