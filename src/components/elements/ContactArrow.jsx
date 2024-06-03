import React from "react";

function ContactArrow({ color }) {
  return (
    <svg
      width="9"
      height="40"
      viewBox="0 0 9 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.85356 0.646446C4.65829 0.451183 4.34171 0.451183 4.14645 0.646446L0.964468 3.82843C0.769206 4.02369 0.769205 4.34027 0.964467 4.53553C1.15973 4.73079 1.47631 4.73079 1.67157 4.53553L4.5 1.70711L7.32843 4.53553C7.52369 4.7308 7.84027 4.7308 8.03554 4.53553C8.2308 4.34028 8.2308 4.02369 8.03554 3.82843L4.85356 0.646446ZM4 1L3.99998 39.5L4.99998 39.5L5 1L4 1Z"
        fill={color}
      />
    </svg>
  );
}

export default ContactArrow;
