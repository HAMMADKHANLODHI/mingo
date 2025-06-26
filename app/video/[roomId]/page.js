"use client";

import dynamic from "next/dynamic";
import { use } from "react";

// Dynamically import VideoCall to avoid SSR issues
const VideoCall = dynamic(() => import("../../component/VideoCall"), { ssr: false });

export default function Page(props) {
  const { roomId } = use(props.params);
  return (
    <div className="w-full h-full">
      <VideoCall roomId={roomId} />
      <div className=" bg-gray-900 flex justify-around w-full h-[10%]">
        <div className="w-[15%] h-full flex justify-between items-center">
          <div className="w-[40%] h-[60%] rounded-full bg-gray-800  flex justify-center items-center"><img className="w-[80%] h-[80%]" src="/image/video-slash.svg"></img></div>
          <div className=" w-[40%] h-[60%] rounded-3xl bg-gray-800 flex justify-center items-center"><img className="w-[80%] h-[80%]" src="/image/microphone.svg"></img></div>


        </div>
        <div className="w-[30%] h-[full] flex justify-center items-center"></div>
        <div className="w-[20%] h-[full] flex justify-around items-center">
          <div className="w-[40%] h-[60%] rounded-4xl bg-gray-800 flex justify-center items-center"><img className="w-[80%] h-[80%]" src="/image/recording.svg"></img></div>
          <div className="w-[40%] h-[50%] rounded-full bg-red-900 flex justify-center items-center"><img className="w-[100%] h-[100%]" src="/image/end-call.svg"></img></div>



        </div>


      </div>
    </div>
  );
}
