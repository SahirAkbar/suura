//@ts-nocheck
import { useEffect, useState } from "react";
import styles from "./CustomTextArea.module.css";

interface CustomTextAreaProps {
  className?: string;
  maxLength?: number;
  cols?: string;
  rows?: string;
}

const CustomTextArea: FC<CustomTextAreaProps> = ({
  className,
  maxLength = 400,
  cols = "100",
  rows = "3",
}) => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(maxLength);
  const onTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setCharCount(maxLength - text.length);
  }, [text, maxLength]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <textarea
        className={styles.input}
        value={text}
        onChange={onTextChange}
        rows={rows}
        cols={cols}
      ></textarea>
      <div
        className={`text-xs font-TTHoves {text-normal} text-dark-5`}
      >{`${charCount} ${charCount > 1 ? "characters" : "character"} left`}</div>
    </div>
  );
};

export default CustomTextArea;
