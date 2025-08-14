"use client";
import { Play, Volume2, VolumeOff } from "lucide-react";
import { Pause } from "lucide-react";
import { useRef, useState } from "react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [mouse, setMouse] = useState(false);
  const [pauseState, setPauseState] = useState(false);
  const [mute, setMute] = useState(true);

  // pause the video
  function pause() {
    if (videoRef.current) {
      if (pauseState) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setPauseState(!pauseState);
    }
  }

  // mute/unmute video
  function sound() {
    if (videoRef.current) {
      videoRef.current.muted = !mute;
    }
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
    >
      <video
        ref={videoRef}
        src="/video/the.mp4"
        className="rounded-2xl w-full h-auto"
        autoPlay
        muted
        loop
      ></video>

      {mouse && (
        <div className="absolute inset-0 flex justify-center items-center gap-6">
          <div
            onClick={pause}
            className="cursor-pointer bg-green-300 p-4 rounded-xl"
          >
            {pauseState ? <Play size={50} /> : <Pause size={50} />}
          </div>

          <div
            onClick={() => {
              sound();
              setMute((pre) => !pre);
            }}
            className="cursor-pointer bg-green-300 p-4 rounded-xl"
          >
            {mute == false ? <Volume2 size={50} /> : <VolumeOff size={50} />}
          </div>
        </div>
      )}
    </div>
  );
}
