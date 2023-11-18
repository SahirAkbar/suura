const IconProfile = ({
  bgColor = "#C7987A",
  color = "white",
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
      <g filter="url(#filter0_d_205_23361)">
        <rect
          x="2"
          y="1"
          width="40"
          height="40"
          rx="8"
          fill={bgColor}
          stroke={outline}
        />
        <path
          d="M28.6666 28.5C28.6666 27.337 28.6666 26.7555 28.5231 26.2824C28.1999 25.217 27.3662 24.3834 26.3009 24.0602C25.8277 23.9167 25.2462 23.9167 24.0832 23.9167H19.9166C18.7536 23.9167 18.1721 23.9167 17.699 24.0602C16.6336 24.3834 15.8 25.217 15.4768 26.2824C15.3333 26.7555 15.3333 27.337 15.3333 28.5M25.7499 17.25C25.7499 19.3211 24.071 21 21.9999 21C19.9289 21 18.2499 19.3211 18.2499 17.25C18.2499 15.1789 19.9289 13.5 21.9999 13.5C24.071 13.5 25.7499 15.1789 25.7499 17.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_205_23361"
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
            result="effect1_dropShadow_205_23361"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_205_23361"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconProfile;
