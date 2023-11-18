// @ts-nocheck
import React, { FC, PropsWithChildren } from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  className?: string;
  onClick?(): void;
  type?: string;
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  className,
  onClick = () => {},
  type = "button",
}) => {
  return (
    <div className="cursor-pointer">
      <button
        className={`${styles.button} px-7 ${className}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
