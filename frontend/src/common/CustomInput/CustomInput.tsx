//@ts-nocheck
import styles from "./CustomInput.module.css";

interface CustomInputProps {
  className?: string;
  type: string;
  label: string;
  placeholder: string;
  onChange?(): void;
  value?: string;
  show: boolean;
}

const CustomInput: FC<CustomInputProps> = ({
  className,
  type,
  label,
  placeholder,
  onChange = () => {},
  value,
  show = false,
}) => {
  return (
    <div className={`relative w-full h-14 ${className}`}>
      <label className="absolute -top-3 left-4 bg-creame-1 text-gray text-base">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={styles.input}
      />
      {show ? (
        <span className="absolute right-2 top-[25%] text-gray cursor-pointer">
          Show
        </span>
      ) : null}
    </div>
  );
};

export default CustomInput;
