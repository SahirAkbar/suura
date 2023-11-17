//@ts-nocheck
import { useEffect, useRef, useState } from "react";
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
  const divRef = useRef<HTMLDivElement>(null);

  const range = document.createRange();
  //range.selectNode(divRef?.current);
  //window.getSelection().addRange(range);

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setCharCount(maxLength - text.length);
  }, [text, maxLength]);

  useEffect(() => {
    divRef?.current?.addEventListener("keypress", (e) => {
      // console.log(divRef?.current?.innerText);
      //const value = divRef?.current?.innerText;
      // divRef?.current?.();

      //getBoundingClientRect.moveEnd("character", value?.length);
      setText(value);
    });
  }, [divRef]);

  console.log(text);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/*<div ref={divRef}>{text}</div>*/}
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
