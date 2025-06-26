"use client";

import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const VideoCall = ({ roomId }) => {
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);
  const peerConnection = useRef(null);
  const [stream, setStream] = useState(null);
  const [isInitiator, setIsInitiator] = useState(false);

  useEffect(() => {
    const startMedia = async () => {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        setStream(localStream);
        if (localVideo.current) {
          localVideo.current.srcObject = localStream;
        }

        peerConnection.current = new RTCPeerConnection({
          iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        });

        localStream.getTracks().forEach((track) => {
          peerConnection.current.addTrack(track, localStream);
        });

        peerConnection.current.ontrack = (event) => {
          if (remoteVideo.current) {
            remoteVideo.current.srcObject = event.streams[0];
          }
        };

        peerConnection.current.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit("ice-candidate", { roomId, candidate: event.candidate });
          }
        };

        socket.emit("join", roomId);
      } catch (err) {
        console.error("Media error:", err);
      }
    };

    startMedia();

    return () => {
      peerConnection.current?.close();
    };
  }, [roomId]);

  useEffect(() => {
    const handleUserJoined = () => {
      console.log("User joined. I will create the offer.");
      setIsInitiator(true);
    };

    const handleOffer = async ({ offer }) => {
      try {
        console.log("Received offer");
        await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await peerConnection.current.createAnswer();
        await peerConnection.current.setLocalDescription(answer);
        socket.emit("answer", { roomId, answer });
      } catch (err) {
        console.error("Offer error:", err);
      }
    };

    const handleAnswer = async ({ answer }) => {
      try {
        console.log("Received answer");
        await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
      } catch (err) {
        console.error("Answer error:", err);
      }
    };

    const handleCandidate = async ({ candidate }) => {
      try {
        console.log("Received ICE candidate");
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (err) {
        console.error("ICE error:", err);
      }
    };

    socket.on("user-joined", handleUserJoined);
    socket.on("offer", handleOffer);
    socket.on("answer", handleAnswer);
    socket.on("ice-candidate", handleCandidate);

    return () => {
      socket.off("user-joined", handleUserJoined);
      socket.off("offer", handleOffer);
      socket.off("answer", handleAnswer);
      socket.off("ice-candidate", handleCandidate);
    };
  }, [roomId]);

  useEffect(() => {
    const makeOffer = async () => {
      if (!isInitiator || !peerConnection.current) return;
      try {
        const offer = await peerConnection.current.createOffer();
        await peerConnection.current.setLocalDescription(offer);
        socket.emit("offer", { roomId, offer });
      } catch (err) {
        console.error("Make offer error:", err);
      }
    };

    makeOffer();
  }, [isInitiator]);

  return (
    <div className={`flex relative w-screen h-[90%] bg-black ')]`}>
          {/* <h2 className="font-semibold mb-2">Your Video</h2> */}
        <video ref={localVideo} autoPlay muted playsInline className="w-full  rounded-lg" />
        <video ref={remoteVideo} autoPlay playsInline className="absolute bottom-0  right-0  w-[20%] mr-[2rem] mb-[3rem] bg-blue-700 rounded-lg" />
      
      
    </div>
  );
};

export default VideoCall;
