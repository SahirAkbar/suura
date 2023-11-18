// @ts-nocheck

import IconBold from "../../icons/IconBold";
import IconItalic from "../../icons/IconItalic";
import IconLink from "../../icons/IconLink";
import IconOrderedList from "../../icons/IconOrderedList";
import IconUnorderedList from "../../icons/IconUnorderedList";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import CustomTextArea from "../CustomTextArea/CustomTextArea";
//import styles from "./TextEditor.module.css";

const TextEditor = () => {
  return (
    <div className="grid grid-rows-2 gap-2">
      <div className="row-span-2 grid grid-cols-7">
        <div className="col-span-4">
          <CustomDropdown
            options={[
              {
                id: "regular",
                value: "regular",
                label: "Regular",
              },
              { id: "bold", value: "bold", label: "Bold" },
              {
                id: "italic",
                value: "italic",
                label: "Italic",
              },
            ]}
            onChange={() => {}}
            onBlur={() => {}}
          />
        </div>
        <div className="flex col-span-2">
          <div className="flex items-center justify-around">
            <span className="font-TTHovesSB font-extrabold">
              <IconBold />
            </span>
            <span className="font-TTHovesSB italic">
              <IconItalic />
            </span>
            <span>
              <IconLink />
            </span>
            <span>
              <IconUnorderedList />
            </span>
            <span>
              <IconOrderedList />
            </span>
          </div>
        </div>
      </div>
      <div className="row-span-4">
        <CustomTextArea value="<b>Welcome to the Jungle</b>" />
      </div>
    </div>
  );
};

export default TextEditor;
