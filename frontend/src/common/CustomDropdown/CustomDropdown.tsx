//@ts-nocheck

import { FC, PropsWithChildren } from "react";
import IconNavigateDown from "../../icons/IconNavigateDown";
import styles from "./CustomDropdown.module.css";

type DropDownItem = {
  id: string;
  value: string;
  label: string;
};

interface CustomDropdownProps {
  options: DropDownItem[];
  className: string;
  onChange?(): void;
  onBlur?(): void;
  label?: string;
  disabled?: boolean;
}

const CustomDropdown: FC<PropsWithChildren<CustomDropdownProps>> = ({
  children,
  options,
  className,
  onChange,
  onBlur,
  label,
  disabled = false,
}) => {
  return (
    <div className="relative">
      <label
        className={`absolute -top-3 left-4 bg-creame-1  text-base px-1 z-10 ${
          disabled ? "text-gray-100" : "text-gray"
        }`}
      >
        {label}
      </label>
      <select
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full h-14 ${className} bg-transparent p-2 rounded-xl border border-gray-outline disabled:border-gray-100 disabled:text-gray-100`}
        disabled={disabled}
      >
        {children
          ? children
          : options.map((optionItem: DropDownItem) => (
              <option
                key={optionItem.id}
                id={optionItem.id}
                value={optionItem.value}
                className={styles.optionItem}
              >
                {optionItem.label}
              </option>
            ))}
      </select>
      <div className="absolute right-4 top-[35%] bg-creame-1 text-gray text-base">
        <IconNavigateDown />
      </div>
    </div>
  );
};

export default CustomDropdown;
