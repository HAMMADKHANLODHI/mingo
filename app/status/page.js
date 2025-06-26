"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Msgcomponent from "../component/Msgcomponent";
import Statussection from "../component/Statussection";
export default function HomePage() {
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
    // <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
    //   <button
    //     onClick={startCall}
    //     className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
    //   >
    //     Start New Video Call
    //   </button>

    //   <input
    //     type="text"
    //     placeholder="Enter Room ID"
    //     value={roomIdInput}
    //     onChange={(e) => setRoomIdInput(e.target.value)}
    //     className="border border-gray-300 px-4 py-2 rounded"
    //   />

    //   <button
    //     onClick={joinCall}
    //     className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
    //   >
    //     Join Call
    //   </button>
    // </div>
    <div className="flex w-[96%] h-full">
      <Statussection classname="w-[100%] lg:w-[30%] h-full" />
      <div className="hidden lg:block  w-[70%] h-full maincolr border-black border-[2px]"></div>
      {/* <Msgcomponent classname="w-[70%] h-full"/> */}


    </div>
  );
}
