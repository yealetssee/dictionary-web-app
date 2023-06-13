import { useState, useEffect } from "react";

import Switch from "react-switch";

const ToggleMode = () => {
  const [isDark, setIsDark] = useState(true);
  const handleToggleChange = () => {
    setIsDark(!isDark);
  };
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(prefersDarkScheme.matches);

    const handleColorSchemeChange = (event) => {
      setIsDark(event.matches);
    };

    prefersDarkScheme.addEventListener("change", handleColorSchemeChange);

    return () => {
      prefersDarkScheme.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="toggle-button">
      <label>
        <Switch
          checked={isDark}
          onChange={handleToggleChange}
          className="custom-switch"
          width={40}
          height={20}
          handleDiameter={14}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#A445ED"
        />
        {/* <span className="toggle-label">Toggle Switch</span> */}
      </label>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            stroke={isDark ? "#A445ED" : "#757575"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </span>
    </div>
  );
};

export default ToggleMode;
