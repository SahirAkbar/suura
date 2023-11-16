//@ts-nocheck

import { FC } from "react";
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
}

const CustomDropdown: FC<CustomDropdownProps> = ({
  options,
  className,
  onChange,
  onBlur,
}) => {
  return (
    <div className="relative">
      <select
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full h-14 ${className} bg-transparent p-2 rounded-xl border border-gray-outline`}
      >
        {options.map((optionItem: DropDownItem) => (
          <option
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
