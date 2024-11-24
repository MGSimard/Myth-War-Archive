"use client";
import { useEffect, useRef } from "react";

// Wanna do this without state for fun
export function AudioPlayer({ src, loop }: { src: string; loop?: boolean }) {
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

    const formatTime = (timeInSeconds: number): string => {
      if (!isFinite(timeInSeconds) || timeInSeconds < 0) return "0:00";

      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    // Set initial volume to match defaultValue of slider
    audioEle.volume = Number(volumeEle.value) / 100;

    // Set initial track duration display
    const setDuration = () => {
      if (isFinite(audioEle.duration)) {
        durationEle.textContent = formatTime(audioEle.duration);
      }
    };

    // Update current time & seeker position on audio timeupdate event
    const updateTimeSeeker = () => {
      const currentTime = audioEle.currentTime;
      const duration = audioEle.duration;

      if (isFinite(currentTime) && isFinite(duration)) {
        if (duration < 0.1) {
          seekerEle.value = audioEle.ended ? "100" : "50";
        } else {
          const percentage = (currentTime / duration) * 100;
          seekerEle.value = percentage.toFixed(2);
        }
        currTimeEle.textContent = formatTime(currentTime);
      }
    };

    const handleEnd = () => {
      const playSvg = playSvgRef.current;
      const pauseSvg = pauseSvgRef.current;
      if (playSvg && pauseSvg) {
        pauseSvg.classList.add("hidden");
        playSvg.classList.remove("hidden");
      }
      seekerEle.value = "100";
    };

    audioEle.addEventListener("loadedmetadata", setDuration);
    audioEle.addEventListener("timeupdate", updateTimeSeeker);
    audioEle.addEventListener("ended", handleEnd);

    return () => {
      audioEle.removeEventListener("timeupdate", updateTimeSeeker);
      audioEle.removeEventListener("loadedmetadata", setDuration);
      audioEle.removeEventListener("ended", handleEnd);
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
        .then(() => {
          document.querySelectorAll("audio").forEach((audio) => {
            if (audio !== audioEle && !audio.paused) {
              audio.pause();
              audio.currentTime = 0;
              const playerDiv = audio.closest(".audio-player");
              if (playerDiv) {
                playerDiv.querySelector(".play-button svg:first-child")?.classList.remove("hidden");
                playerDiv.querySelector(".play-button svg:last-child")?.classList.add("hidden");
              }
            }
          });
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
    if (audioEle && isFinite(audioEle.duration)) {
      const newTime = (Number(e.target.value) / 100) * audioEle.duration;
      if (isFinite(newTime)) {
        audioEle.currentTime = newTime;
      }
    }
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
      <audio ref={audioRef} src={src} preload="metadata" loop={loop} />
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
      <svg ref={muteSvgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
        <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
      </svg>
      <svg
        ref={unmuteSvgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="hidden">
        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
      </svg>
    </>
  );
}
