import { useRef, useState, useEffect } from "react";

const Play = ({ searchResult }) => {
  const audioRef = useRef(null);
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    let foundAudioUrl = null;

    searchResult.forEach((result) => {
      const itemWithSourceUrl = result.phonetics.find((item) =>
        item.hasOwnProperty("audio"),
      );

      if (itemWithSourceUrl) {
        foundAudioUrl = itemWithSourceUrl.audio;

        return;
      }
    });

    if (foundAudioUrl) {
      setAudioUrl(foundAudioUrl);
    } else {
      setAudioUrl(null);
    }
  }, [searchResult]);
  const handlePlayClick = () => {
    if (audioRef.current && audioUrl) {
      audioRef.current.play();
    }
  };
  console.log(audioUrl);

  return (
    <div className="play">
      <svg
        onClick={handlePlayClick}
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
      >
        <g fill="#A445ED" fillRule="evenodd">
          <circle cx="37.5" cy="37.5" r="37.5" />
          <path d="M29 27v21l21-10.5z" />
        </g>
      </svg>
      <audio src={audioUrl} ref={audioRef}>
        {/* <source src={audioUrl} type="audio/mpeg" /> */}
      </audio>
    </div>
  );
};
export default Play;
