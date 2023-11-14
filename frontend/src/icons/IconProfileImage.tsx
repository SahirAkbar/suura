//@ts-nocheck
const IconProfileImage = ({ bgColor, color, outline = "#EAECF0" }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_205_23370)">
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
          d="M22.0999 21.6502C22.0416 21.6419 21.9666 21.6419 21.8999 21.6502C20.4333 21.6002 19.2666 20.4002 19.2666 18.9252C19.2666 17.4169 20.4833 16.1919 21.9999 16.1919C23.5083 16.1919 24.7333 17.4169 24.7333 18.9252C24.7249 20.4002 23.5666 21.6002 22.0999 21.6502Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27.6166 27.1498C26.1333 28.5081 24.1666 29.3331 22 29.3331C19.8333 29.3331 17.8666 28.5081 16.3833 27.1498C16.4666 26.3665 16.9666 25.5998 17.8583 24.9998C20.1416 23.4831 23.875 23.4831 26.1416 24.9998C27.0333 25.5998 27.5333 26.3665 27.6166 27.1498Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.0001 29.3332C26.6025 29.3332 30.3334 25.6022 30.3334 20.9998C30.3334 16.3975 26.6025 12.6665 22.0001 12.6665C17.3977 12.6665 13.6667 16.3975 13.6667 20.9998C13.6667 25.6022 17.3977 29.3332 22.0001 29.3332Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_205_23370"
          x="0"
          y="0"
          width="44"
          height="44"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_205_23370"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_205_23370"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconProfileImage;
