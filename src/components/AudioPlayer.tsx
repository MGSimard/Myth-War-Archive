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
  const muteSvgRef = useRef<SVGSVGElement | null>(null);
  const unmuteSvgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const audioEle = audioRef.current;
    const currTimeEle = currTimeRef.current;
    const durationEle = durationRef.current;
    const seekerEle = seekerRef.current;
    const volumeEle = volumeRef.current;

    if (!audioEle || !currTimeEle || !durationEle || !seekerEle || !volumeEle) return;

    const formatTime = (timeInSeconds: number) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    // Set initial volume to match defaultValue of slider
    audioEle.volume = Number(volumeEle.value) / 100;

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
      audioEle
        .play()
        .then(() => {
          playSvg.classList.add("hidden");
          pauseSvg.classList.remove("hidden");
        })
        .catch(() => console.error("ERROR PLAYING AUDIO"));
    } else {
      audioEle.pause();
      pauseSvg.classList.add("hidden");
      playSvg.classList.remove("hidden");
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audioEle = audioRef.current;
    if (audioEle) audioEle.currentTime = (Number(e.target.value) / 100) * audioEle.duration;
  };

  const handleMute = () => {
    const audioEle = audioRef.current;
    const muteSvg = muteSvgRef.current;
    const unmuteSvg = unmuteSvgRef.current;
    const volumeEle = volumeRef.current;
    if (!audioEle || !muteSvg || !unmuteSvg || !volumeEle) return;
    if (audioEle.muted) {
      audioEle.muted = false;
      unmuteSvg.classList.add("hidden");
      muteSvg.classList.remove("hidden");
      volumeEle.classList.remove("muted");
    } else {
      audioEle.muted = true;
      muteSvg.classList.add("hidden");
      unmuteSvg.classList.remove("hidden");
      volumeEle.classList.add("muted");
    }
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
          <PlaySvgs playSvgRef={playSvgRef} pauseSvgRef={pauseSvgRef} />
        </button>
        <input ref={seekerRef} className="seek-slider" type="range" defaultValue={0} onChange={handleSeek} />
        <div className="volume-wrapper">
          <input ref={volumeRef} className="volume-slider" type="range" defaultValue={100} onChange={handleVolume} />
          <button type="button" onClick={handleMute} className="mute-button">
            <MuteSvgs muteSvgRef={muteSvgRef} unmuteSvgRef={unmuteSvgRef} />
          </button>
        </div>
      </div>
    </div>
  );
}

function PlaySvgs({
  playSvgRef,
  pauseSvgRef,
}: {
  playSvgRef: React.RefObject<SVGSVGElement>;
  pauseSvgRef: React.RefObject<SVGSVGElement>;
}) {
  return (
    <>
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
    </>
  );
}

function MuteSvgs({
  muteSvgRef,
  unmuteSvgRef,
}: {
  muteSvgRef: React.RefObject<SVGSVGElement>;
  unmuteSvgRef: React.RefObject<SVGSVGElement>;
}) {
  return (
    <>
      <svg
        ref={muteSvgRef}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
        />
      </svg>
      <svg
        ref={unmuteSvgRef}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="hidden">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
        />
      </svg>
    </>
  );
}
