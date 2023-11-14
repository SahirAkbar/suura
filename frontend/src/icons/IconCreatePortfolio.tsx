const IconCreatePortfolio = ({
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
      <g filter="url(#filter0_d_205_23399)">
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
          d="M19.4999 19.3333C20.4204 19.3333 21.1666 18.5871 21.1666 17.6667C21.1666 16.7462 20.4204 16 19.4999 16C18.5794 16 17.8333 16.7462 17.8333 17.6667C17.8333 18.5871 18.5794 19.3333 19.4999 19.3333Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.8334 12.6665H19.5001C15.3334 12.6665 13.6667 14.3332 13.6667 18.4998V23.4998C13.6667 27.6665 15.3334 29.3332 19.5001 29.3332H24.5001C28.6667 29.3332 30.3334 27.6665 30.3334 23.4998V19.3332"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.125 15.1665H29.7083"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M27.4167 17.4583V12.875"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M14.2251 26.7918L18.3334 24.0335C18.9918 23.5918 19.9418 23.6418 20.5334 24.1501L20.8084 24.3918C21.4584 24.9501 22.5084 24.9501 23.1584 24.3918L26.6251 21.4168C27.2751 20.8585 28.3251 20.8585 28.9751 21.4168L30.3334 22.5835"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_205_23399"
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
            result="effect1_dropShadow_205_23399"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_205_23399"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconCreatePortfolio;
