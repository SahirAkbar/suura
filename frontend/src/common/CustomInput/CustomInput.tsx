//@ts-nocheck
import { useState } from "react";
import styles from "./CustomInput.module.css";

interface CustomInputProps {
  className?: string;
  type: string;
  label: string;
  placeholder: string;
  onChange?(): void;
  onBlur?(): void;
  value?: string;
  required?: string;
}

const CustomInput: FC<CustomInputProps> = ({
  className,
  type,
  label,
  placeholder,
  onChange = () => {},
  onBlur = () => {},
  value,
  required,
}) => {
  const [show, setShow] = useState(true);
  return (
    <div className={`relative w-full h-14 ${className}`}>
      <label className="absolute -top-3 left-4 bg-creame-1 text-gray text-base">
        {label}
      </label>
      <input
        type={!show ? "text" : type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={styles.input}
        required={required}
      />
      {type === "password" ? (
        <div
          className="absolute right-4 top-[25%] text-gray-100 cursor-pointer"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? <span>Show</span> : <span>Hide</span>}
        </div>
      ) : null}
    </div>
  );
};

export default CustomInput;
