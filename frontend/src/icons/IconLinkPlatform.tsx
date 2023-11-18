const IconLinkPlatform = ({
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
      <g filter="url(#filter0_d_205_23379)">
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
          d="M19.5001 29.3332H24.5001C28.6667 29.3332 30.3334 27.6665 30.3334 23.4998V18.4998C30.3334 14.3332 28.6667 12.6665 24.5001 12.6665H19.5001C15.3334 12.6665 13.6667 14.3332 13.6667 18.4998V23.4998C13.6667 27.6665 15.3334 29.3332 19.5001 29.3332Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.9999 23.9168C23.6107 23.9168 24.9166 22.611 24.9166 21.0002C24.9166 19.3893 23.6107 18.0835 21.9999 18.0835C20.3891 18.0835 19.0833 19.3893 19.0833 21.0002C19.0833 22.611 20.3891 23.9168 21.9999 23.9168Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.6968 16.8332H26.7065"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_205_23379"
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
            result="effect1_dropShadow_205_23379"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_205_23379"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconLinkPlatform;
