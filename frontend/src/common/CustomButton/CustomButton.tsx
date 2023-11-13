import React, { FC, PropsWithChildren } from "react";
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  classes: string;
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  className,
}) => {
  return (
    <div>
      <button className={`${styles.button} px-7 ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
