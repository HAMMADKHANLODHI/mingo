import React from 'react'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Msgcomponent = ({ classname = "" }) => {
    const router = useRouter();
  const [roomIdInput, setRoomIdInput] = useState("");

  const startCall = () => {
    const roomId = uuidv4();
    router.push(`/video/${roomId}`);
  };

  const joinCall = () => {
    if (roomIdInput.trim()) {
      router.push(`/video/${roomIdInput.trim()}`);
    } else {
      alert("Please enter a Room ID");
    }
  };
    return (
        <div className={`${classname}`}>
            <div className=' flex items-center justify-between w-full h-[10%] maincolr'>
                <div className='flex w-[20%] h-full items-center '>
                    <div className=' flex justify-center mr-[2%] items-center w-[30%] h-[100%] '>
                        <img className='rounded-full ' src='/image/hammadpix.jpeg'></img>


                    </div>
                    <div className='flex justify-center items-center w-auto h-full '>
                        <h1 className='flex text-base text-white font-bold  items-center'>HAMMAD UL HAQ</h1>
                    </div>
                </div>
                <div className='flex  w-[20%] h-[60%] '>
                    <div className='w-[60%] rounded-lg bg-gray-700 border-[1px] border-gray-400 h-full  flex justify-center items-center'>
                        <div onClick={startCall} className='w-[49%] h-full flex justify-center items-center'><img src="/icon/video.svg" className='w-[50%] h-[50%]'></img></div>
                        <div className='w-[1%] h-[50%]  bg-white flex justify-center items-center'></div>
                        <div className='w-[50%] h-full  flex justify-center items-center'><img src="/icon/call.svg" className='w-[50%] h-[50%]'></img></div>
                    </div>
                    <div className='w-[30%] h-full  flex justify-center items-center'><img src="/icon/search.svg" className='w-[50%] h-[50%]'></img></div>
                </div>
            </div>
            <div className={`w-full h-[90%] bg-[url('/image/images.jpeg')]  `}>
                <div className='w-full h-[92%] overflow-y-auto'>
                    <div className=' w-[95%] h-auto  m-[1rem]'>
                        <div className='relative w-[50%] h-[95%] bg-cyan-950 text-white text-lg rounded-xl flex justify-center'> <h1 className='w-[85%] h-full'> Technology continues to reshape the world in extraordinary ways. From artificial intelligence to renewable energy, innovative advancements are driving progress across every industry. Businesses are adapting to digital transformation, using data to make smarter decisions and improve customer experiences. Meanwhile, education, healthcare, and communication have become more accessible thanks to modern tools and platforms. Despite the benefits, challenges such as privacy concerns, cybersecurity threats, and ethical dilemmas persist. As we move forward, it is crucial to develop technology responsibly, ensuring it serves humanity's best interests. With collaboration, creativity, and thoughtful regulation, we can harness technology’s full potential for global good.</h1>
                            <h1 className='mb-[0.5rem] absolute bottom-0 right-0 w-[10%] h-[1rem]'> date</h1>
                        </div>
                    </div>
                    <div className='w-[95%] h-auto  m-[1rem]'>
                        <div className='relative w-[50%] h-[95%] ml-auto text-lg text-white bg-blue-950 rounded-xl flex justify-center'><h1 className='w-[95%] h-full' >To move a to the right side of its container in Tailwind CSS, here are a few common methods depending on your layout needs</h1>
                            <h1 className='mb-[0.5rem] absolute bottom-0 right-0 w-[10%] h-[1rem]'> date</h1> </div>
                    </div>
                    <div className=' w-[95%] h-auto text-white  text-lg  m-[1rem]'>
                        <div className='relative w-[50%] h-[95%] bg-cyan-950 rounded-xl flex justify-center'> <h1 className='w-[85%] h-full'> Technology continues to reshape the world in extraordinary ways. From artificial intelligence to renewable energy, innovative advancements are driving progress across every industry. Businesses are adapting to digital transformation, using data to make smarter decisions and improve customer experiences. Meanwhile, education, healthcare, and communication have become more accessible thanks to modern tools and platforms. Despite the benefits, challenges such as privacy concerns, cybersecurity threats, and ethical dilemmas persist. As we move forward, it is crucial to develop technology responsibly, ensuring it serves humanity's best interests. With collaboration, creativity, and thoughtful regulation, we can harness technology’s full potential for global good.</h1>
                            <h1 className='mb-[0.5rem] absolute bottom-0  right-0 w-[10%] h-[1rem]'> date</h1>
                        </div>
                    </div>
                    



                </div>
                <div className='flex w-full h-[8%] maincolr '>
                    <div className='w-[5%] h-[100%]  rounded-xl flex justify-center items-center'><img src="/icon/emoji.svg" className='w-[50%] h-[50%]'></img></div>
                    <div className='w-[5%] h-[100%]  rounded-xl  flex justify-center items-center'><img src="/icon/attach.svg" className='w-[50%] h-[50%]'></img></div>
                    <input type='text ' className='w-[85%] h-[100%] placeholder:text-white text-white rounded-xl' placeholder="Enter a Message"></input>
                    <div className='w-[5%] h-[100%]  rounded-xl  flex justify-center items-center'><img src="/icon/microphone.svg" className='w-[50%] h-[50%]'></img></div>
                </div>
            </div>





        </div>
    )
}

export default Msgcomponent