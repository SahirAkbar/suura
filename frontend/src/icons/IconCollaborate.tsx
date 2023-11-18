const IconCollaborate = ({
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
      <g filter="url(#filter0_d_205_23666)">
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
          d="M21.5502 22.4416C22.8434 22.4416 23.8918 21.3932 23.8918 20.1C23.8918 18.8067 22.8434 17.7583 21.5502 17.7583C20.2569 17.7583 19.2085 18.8067 19.2085 20.1C19.2085 21.3932 20.2569 22.4416 21.5502 22.4416Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.8751 27.8331C25.8751 25.8915 23.9418 24.3081 21.5501 24.3081C19.1584 24.3081 17.2251 25.8831 17.2251 27.8331"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.5001 21.4167C29.5001 25.7917 25.9584 29.3333 21.5834 29.3333C17.2084 29.3333 13.6667 25.7917 13.6667 21.4167C13.6667 17.0417 17.2084 13.5 21.5834 13.5C22.6751 13.5 23.7167 13.7167 24.6667 14.1167C24.5584 14.45 24.5001 14.8 24.5001 15.1667C24.5001 15.7917 24.6751 16.3833 24.9834 16.8833C25.1501 17.1667 25.3667 17.425 25.6167 17.6416C26.2001 18.175 26.9751 18.5 27.8334 18.5C28.2001 18.5 28.5501 18.4416 28.8751 18.325C29.2751 19.275 29.5001 20.325 29.5001 21.4167Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.1667 15.1668C31.1667 15.4335 31.1333 15.6918 31.0667 15.9418C30.9917 16.2752 30.8583 16.6002 30.6833 16.8835C30.2833 17.5585 29.6417 18.0835 28.875 18.3251C28.55 18.4418 28.2 18.5002 27.8333 18.5002C26.975 18.5002 26.2 18.1751 25.6167 17.6418C25.3667 17.4251 25.15 17.1668 24.9833 16.8835C24.675 16.3835 24.5 15.7918 24.5 15.1668C24.5 14.8002 24.5583 14.4502 24.6667 14.1168C24.825 13.6335 25.0917 13.2002 25.4417 12.8418C26.05 12.2168 26.9 11.8335 27.8333 11.8335C28.8167 11.8335 29.7083 12.2585 30.3083 12.9418C30.8417 13.5335 31.1667 14.3168 31.1667 15.1668Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.0749 15.1504H26.5916"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.8333 13.9336V16.4253"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_205_23666"
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
            result="effect1_dropShadow_205_23666"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_205_23666"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconCollaborate;
