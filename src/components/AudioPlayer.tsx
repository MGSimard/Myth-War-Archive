"use client";
import { useEffect, useRef } from "react";

// Wanna do this without state for fun
export function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const seekerRef = useRef<HTMLInputElement | null>(null);
  const volumeRef = useRef<HTMLInputElement | null>(null);
  const currTimeRef = useRef<HTMLSpanElement | null>(null);
  const durationRef = useRef<HTMLSpanElement | null>(null);

  const playSvgRef = useRef<SVGSVGElement | null>(null);
  const pauseSvgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const audioEle = audioRef.current;
    const currTimeEle = currTimeRef.current;
    const durationEle = durationRef.current;
    const seekerEle = seekerRef.current;
    const volumeEle = volumeRef.current;

    if (!audioEle || !currTimeEle || !durationEle || !seekerEle || !volumeEle) return;

    audioEle.volume = Number(volumeEle.value) / 100;

    const formatTime = (timeInSeconds: number) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    // Set initial track duration display
    const setDuration = () => {
      durationEle.textContent = formatTime(audioEle.duration);
    };

    // Update current time & seeker position on audio timeupdate event
    const updateTimeSeeker = (e: Event) => {
      const audioEle = e.target as HTMLAudioElement;
      const currentTime = Math.floor(audioEle.currentTime);
      const duration = Math.floor(audioEle.duration);
      const percentage = (currentTime / duration) * 100;
      seekerEle.value = percentage.toString();
      currTimeEle.textContent = formatTime(currentTime);
    };

    audioEle.addEventListener("loadedmetadata", setDuration);
    audioEle.addEventListener("timeupdate", updateTimeSeeker);

    return () => {
      audioEle.removeEventListener("timeupdate", updateTimeSeeker);
      audioEle.removeEventListener("loadedmetadata", setDuration);
    };
  }, [audioRef, seekerRef, currTimeRef, durationRef, volumeRef]);

  const handlePlay = () => {
    const audioEle = audioRef.current;
    const playSvg = playSvgRef.current;
    const pauseSvg = pauseSvgRef.current;
    if (!audioEle || !playSvg || !pauseSvg) return;

    if (audioEle.paused) {
      audioEle.play().then(() => {
        pauseSvg.classList.remove("hidden");
        playSvg.classList.add("hidden");
      });
    } else {
      audioEle.pause();
      playSvg.classList.remove("hidden");
      pauseSvg.classList.add("hidden");
    }
  };
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audioEle = audioRef.current;
    if (audioEle) audioEle.currentTime = (Number(e.target.value) / 100) * audioEle.duration;
  };
  const handleMute = () => {
    const audioEle = audioRef.current;
    if (audioEle) audioEle.muted = !audioEle.muted;
    // TODO: Make volume slider gray if muted
  };
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audioEle = audioRef.current;
    if (audioEle) audioEle.volume = Number(e.target.value) / 100;
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} preload="metadata" loop />
      <div className="time-displays">
        <span ref={currTimeRef}>0:00</span>/<span ref={durationRef}>0:00</span>
      </div>
      <div className="controls">
        <button type="button" onClick={handlePlay} className="play-button">
          <svg ref={playSvgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            ref={pauseSvgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="hidden">
            <path
              fillRule="evenodd"
              d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input ref={seekerRef} className="seek-slider" type="range" defaultValue={0} onChange={handleSeek} />
        <div className="volume-wrapper">
          <input ref={volumeRef} className="volume-slider" type="range" defaultValue={50} onChange={handleVolume} />
          <button type="button" onClick={handleMute} className="mute-button">
            Mute
          </button>
        </div>
      </div>
    </div>
  );
}
