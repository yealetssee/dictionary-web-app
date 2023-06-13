import "./App.css";
import searchIcon from "../public/images/icon-search.svg";
import { useState } from "react";
import Toggle from "react-toggle";

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
  const [font, setFont] = useState("Sans Serif");

  const [showMenu, setShowMenu] = useState(false);

  const handleFontSelect = (selectedFont) => {
    setFont(selectedFont);
  };

  const handleMenuBlur = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 0);
  };

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
          <Toggle />
        </div>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search for any word..." />
        <img src={searchIcon} alt="search icon" width="16" height="16" />
      </div>

      <main>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            expedita est dolor in cupiditate error quod, unde corporis maxime!
            Perferendis, natus. Adipisci autem quos maxime cumque, porro
            deleniti dolorem doloribus.
          </p>
        </div>
      </main>
    </main>
  );
}

export default App;
