import "./App.css";

import searchIcon from "../public/images/icon-search.svg";
import { useRef, useState } from "react";
import useService from "./hooks/useService";
import ToggleMode from "./components/ToggleDarkMode";
import Definition from "./components/Definition";
import Play from "./components/Playbutton";

const fontStyles = {
  sansSerif: {
    fontFamily: "Inter, sans-serif",
  },

  Serif: {
    fontFamily: "Lora, serif",
  },
  Mono: {
    fontFamily: "Inconsolata, monospace",
  },
};

function App() {
  const {
    searchInput,
    searchResult,
    handleInputChange,
    searchClickHandler,
    isEmpty,
  } = useService();
  const [font, setFont] = useState("Sans Serif");

  const [showMenu, setShowMenu] = useState(false);

  const handleFontSelect = (selectedFont) => {
    setFont(selectedFont);
  };

  const handleMenuBlur = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 200);
  };
  // console.log(searchResult);

  return (
    <main style={fontStyles[font]}>
      <nav>
        <svg
          className="bookLogo"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="38"
          viewBox="0 0 34 38"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
        <div className="right-section">
          <div className="font-select">
            <div className="choose">
              <span
                onClick={() => setShowMenu(!showMenu)}
                onBlur={handleMenuBlur}
                tabIndex="0"
                style={fontStyles[font]}
              >
                {font}
              </span>
              <div className={`font-select-sub ${showMenu ? `shown` : ``}`}>
                <div className="sans-serif">
                  <span onClick={() => handleFontSelect("Sans Serif")}>
                    Sans Serif
                  </span>
                </div>
                <div className="serif">
                  <span onClick={() => handleFontSelect("Serif")}>Serif</span>
                </div>
                <div className="mono">
                  <span onClick={() => handleFontSelect("Mono")}>Mono</span>
                </div>
              </div>
            </div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
              >
                <path
                  className="arrow-down"
                  fill="none"
                  stroke="#A445ED"
                  strokeWidth="1.5"
                  d="m1 1 6 6 6-6"
                />
              </svg>
            </span>
          </div>
          <div className="border"></div>
          <ToggleMode />
        </div>
      </nav>
      <div
        className="search-bar"
        style={isEmpty ? { border: "1px solid #FF5252" } : {}}
      >
        <input
          type="text"
          placeholder="Search for any word..."
          value={searchInput}
          onChange={handleInputChange}
        />
        <img
          src={searchIcon}
          alt="search icon"
          width="16"
          height="16"
          onClick={searchClickHandler}
        />
      </div>
      {isEmpty && (
        <div className="error-text">
          <span>Whoops, can't be empty…</span>
        </div>
      )}

      {JSON.stringify(searchResult) !== "{}" && (
        <section className="word-meaning">
          <div className="word-play">
            <div>
              <p className="word">{searchResult[0].word}</p>

              <p className="phonetic">{searchResult[0].phonetic}</p>
            </div>
            <Play searchResult={searchResult} />
          </div>
          <Definition searchResult={searchResult} />

          <div className="source">
            <p>Source</p>
            <a href={searchResult[0].sourceUrls}>
              {searchResult[0].sourceUrls}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  fill="none"
                  stroke="#838383"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                />
              </svg>
            </a>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
