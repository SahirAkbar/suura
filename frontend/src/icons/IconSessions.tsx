const IconSessions = ({
  bgColor = "white",
  color = "black",
  outline = "#EAECF0",
}) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_205_23388)">
        <rect x="2" y="1" width="40" height="40" rx="8" fill={bgColor} />
        <rect
          x="2.5"
          y="1.5"
          width="39"
          height="39"
          rx="7.5"
          stroke={outline}
        />
        <path
          d="M17.6334 29.3332H26.3667C28.6667 29.3332 29.5834 27.9248 29.6917 26.2082L30.1251 19.3248C30.2417 17.5248 28.8084 15.9998 27.0001 15.9998C26.4917 15.9998 26.0251 15.7082 25.7917 15.2582L25.1917 14.0498C24.8084 13.2915 23.8084 12.6665 22.9584 12.6665H21.0501C20.1917 12.6665 19.1917 13.2915 18.8084 14.0498L18.2084 15.2582C17.9751 15.7082 17.5084 15.9998 17.0001 15.9998C15.1917 15.9998 13.7584 17.5248 13.8751 19.3248L14.3084 26.2082C14.4084 27.9248 15.3334 29.3332 17.6334 29.3332Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.75 17.6665H23.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.0001 26.0002C23.4917 26.0002 24.7084 24.7835 24.7084 23.2918C24.7084 21.8002 23.4917 20.5835 22.0001 20.5835C20.5084 20.5835 19.2917 21.8002 19.2917 23.2918C19.2917 24.7835 20.5084 26.0002 22.0001 26.0002Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_205_23388"
          x="0"
          y="0"
          width="44"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_205_23388"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_205_23388"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconSessions;
