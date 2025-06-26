"use client"


import React, { useRef, useState } from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useEffect } from 'react';



const IconSection = ({ classname = "", menus, setMenus }) => {
  const settingRef = useRef(null);
  const settingRefs = useRef(null);
  const [showsetting, setshowsetting] = useState(false);
  const [hideSetting, setHideSetting] = useState(true);
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Clicked element:", event.target);
      console.log("Inside setting:", settingRef.current?.contains(event.target));
      const i = settingRef.current?.contains(event.target);
      const is = settingRefs.current?.contains(event.target);
      console.log(" settingRef.current ", settingRef.current, " and  settingRef.current.contains(event.target) ", settingRef.current && !settingRef.current.contains(event.target))
      console.log("The i is", i)
      console.log("The is is", is)
      if (i === false && is === false) {
        console.log("i am inside")
        setshowsetting(false);
        setTimeout(() => setHideSetting(true), 500); // optional: if you're using animated hide
      }
    };

    if (showsetting) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showsetting]);


  const handlesettingdiv = () => {
    console.log("handle setting div is working")
    if (!showsetting) {
      // Showing: unhide then animate in
      setHideSetting(false);         // remove 'hidden' first
      setTimeout(() => setshowsetting(true), 50); // allow 1 frame delay
    } else {
      // Hiding: animate out, then hide
      setshowsetting(false);
      setTimeout(() => setHideSetting(true), 500); // match your transition duration
    }
  };
  const iconsec = useRef(null);
  const handlemenu = () => {
    setMenus(!menus);
    console.log("The Menu is ", menus);
    const secondChild = iconsec.current.parentElement.children[1];
    // if(menus)
    // {

    // secondChild.classList.remove("w-[96%]");
    // secondChild.classList.remove("w-[100%]");
    //     secondChild.classList.add("w-[96%]");

    //     console.log("The width is 96%")
    // }
    // else{

    //   secondChild.classList.remove("w-[100%]");
    //   secondChild.classList.remove("w-[96%]");
    // secondChild.classList.add("w-[100%]");

    //   console.log("The width is 100%")
    // }

    console.log("Second child element:", secondChild);
  }


  return (
    <div ref={iconsec} className={`${classname} ${menus ? "absolute w-[20rem] " : "w-[100%]  "} transition-all duration-900  ease-in-out   h-full flex flex-col justify-between sectioncolor`}>
      <div className='h-[30%] w-full flex flex-col   items-center ' >
        <div onClick={handlemenu} className={` w-full h-[20%] hovercolor rounded-xl flex ${menus ? "" : "justify-center"}  items-center`}><img alt='menu' src="/icon/menue.svg" className={`${menus ? "ml-[10%]" : ""}  max-w-[50%] max-h-[50%]`}></img> </div>
        <Link href="/" className={` w-full h-[20%] hovercolor rounded-xl flex ${menus ? "" : "justify-center"}  items-center`}><img src="/icon/chats.svg" className={`${menus ? "ml-[10%]" : ""}  max-w-[50%] max-h-[50%]`}></img>
          <h1 className={` text-white text-xl font-semibold ml-[6%] ${menus ? "" : "hidden"} `}>Chat</h1>

        </Link>
        <Link href="/calllog" className={` w-full h-[20%] hovercolor rounded-xl flex ${menus ? "" : "justify-center"}  items-center`}>


          <img src="/icon/call.svg" className={`${menus ? "ml-[10%]" : ""}  max-w-[50%] max-h-[50%]`}></img>
          <h1 className={` text-white text-xl font-semibold ml-[6%] ${menus ? "" : "hidden"} `}>Call</h1> </Link>
        <Link href={`/status`} className={` w-full h-[20%] hovercolor rounded-xl flex ${menus ? "" : "justify-center"}  items-center`}><img src="/icon/status.svg" className={`${menus ? "ml-[10%]" : ""}  max-w-[50%] max-h-[50%]`}></img>
          <h1 className={` text-white text-xl font-semibold ml-[6%] ${menus ? "" : "hidden"} `}>Status</h1>
        </Link>
        <div className={` w-full h-[20%] hovercolor rounded-xl flex ${menus ? "" : "justify-center"}  items-center`}><img src="/icon/archive.svg" className={`${menus ? "ml-[10%]" : ""}  max-w-[50%] max-h-[50%]`}></img>
          <h1 className={` text-white text-xl font-semibold ml-[6%] ${menus ? "" : "hidden"} `}>Archive</h1>
        </div>


        {/* E:\mingo\mingo\public\icon\call.svg */}
      </div>
      <div className='h-[30%] w-full'>
        <div className={` w-full h-[20%] hovercolor rounded-xl flex ${menus ? "" : "justify-center"}  items-center`}><img src="/icon/star.svg" className={`${menus ? "ml-[10%]" : ""}  max-w-[50%] max-h-[50%]`}></img>
          <h1 className={` text-white text-xl font-semibold ml-[6%] ${menus ? "" : "hidden"} `}>Starred Messages</h1>
        </div>
        <Link href={"/archive"} className={` w-full h-[20%] hovercolor rounded-xl flex ${menus ? "" : "justify-center"}  items-center`}><img src="/icon/archive.svg" className={`${menus ? "ml-[10%]" : ""}  max-w-[50%] max-h-[50%]`}></img>
          <h1 className={` text-white text-xl font-semibold ml-[6%] ${menus ? "" : "hidden"} `}>Archived Chats</h1>
        </Link>
        <div  ref={settingRefs} onClick={handlesettingdiv} className={` w-full h-[20%] relative hovercolor rounded-xl flex ${menus ? "" : "justify-center"}  items-center`}><img src="/icon/setting.svg" className={`${menus ? "ml-[10%]" : ""}  max-w-[50%] max-h-[50%]`}></img>
          <h1  className={`  text-white text-xl font-semibold ml-[6%] ${menus ? "" : "hidden"} `}>Setting</h1>
          
        </div>
        <div className={` w-full h-[20%] relative hovercolor rounded-xl flex ${menus ? "" : "justify-center"}  items-center`}><img src="/icon/archive.svg" className={`${menus ? "ml-[10%]" : ""}  max-w-[50%] max-h-[50%]`}></img><div
            ref={settingRef}
            className={`${showsetting
              ? 'translate-y-0 opacity-100 pointer-events-auto visible'
              : 'translate-y-full opacity-0 pointer-events-none invisible'
              } transition-transform duration-500 ease-in-out absolute w-[1200%] mb-[4rem] z-50 bottom-[-5.5rem] left-[100%] h-[1500%] flex`}
          >


            <div className='w-[40%] h-full bg-gray-600 rounded-l-2xl'>
              <div className='w-[95%] mt-[2.5%] mb-[2.5%] mr-[2.5%] rounded-xl ml-[2.5%] h-[7%] bg-gray-400 text-gray-700 font-semibold text-2xl flex justify-center items-center'><h1 >General</h1></div>
              <div className='w-[95%] mt-[2.5%] mb-[2.5%] mr-[2.5%] rounded-xl ml-[2.5%] h-[7%] bg-gray-400 text-gray-700 font-semibold text-2xl flex justify-center items-center'><h1>Notification</h1></div>
              <div className='w-[95%] mt-[2.5%] mb-[2.5%] mr-[2.5%] rounded-xl ml-[2.5%] h-[7%] bg-gray-400 text-gray-700 font-semibold text-2xl flex justify-center items-center'> <h1>Chat</h1> </div>
              <div className='w-[95%] mt-[2.5%] mb-[2.5%] mr-[2.5%] rounded-xl ml-[2.5%] h-[7%] bg-gray-400 text-gray-700 font-semibold text-2xl flex justify-center items-center'> <h1>Logout</h1> </div>



            </div>
            <div className='w-[60%] h-full bg-amber-500 rounded-r-2xl '></div>
          </div> </div>



      </div>

    </div>
  )
}

export default IconSection
