import React, { FC, PropsWithChildren } from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  classes: string;
  onClick(): void;
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  className,
  onClick = () => {},
}) => {
  return (
    <div className="cursor-pointer">
      <button
        className={`${styles.button} px-7 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
