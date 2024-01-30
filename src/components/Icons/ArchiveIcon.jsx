import { useState } from "react";

export const ArchiveIcon = () => {
  const [iconColor, setIconColor] = useState("#E1E1E1");
  const handleButtonClick = () => {
    if (iconColor === "#E1E1E1") {
      setIconColor("orange");
    } else {
      setIconColor("#E1E1E1");
    }
  };

  return (
    <>
      <div className="archive-btn" onClick={handleButtonClick}>
        <svg
          className="archiveIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.25 8.05005C11.0257 8.70006 12.9743 8.70006 14.75 8.05005"
            stroke={iconColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};
