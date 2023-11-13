// @ts-nocheck
import { useState } from "react";
import Editor, {
  BtnBold,
  BtnItalic,
  EditorProvider,
  Toolbar,
  createButton,
} from "react-simple-wysiwyg";
import { InstagramLogin } from "@amraneze/react-instagram-login";
const ProfilePictureUpload = () => {
  const responseInstagram = (response) => {
    console.log(response);
  };
  const [html, setHtml] = useState("my <b>HTML</b>");
  function onChange(e: any) {
    setHtml(e.target.value);
  }
  const BtnAlignCenter = createButton("Align center", "≡", "justifyCenter");
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <div className="absolute -mt-14 w-32 h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 outline-dashed outline-gray-300">
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="ml-36 w-full mt-2">
        <p>Click to upload profile</p>
        <p>PNG or JPG (optimal size 800 * 800 px)</p>
      </div>
      <div className="flex flex-col">
        <div className="w-1/3 flex flex-col">
          <div>
            <p>Bio</p>
            <p>Write a short introduction</p>
          </div>
        </div>
        <div className="w-2/3">
          <div>
            <EditorProvider>
              <Editor value={html} onChange={onChange}>
                <Toolbar>
                  <BtnBold />
                  <BtnItalic />
                  <BtnAlignCenter />
                </Toolbar>
              </Editor>
            </EditorProvider>
          </div>
        </div>
        <InstagramLogin
          clientId="193694740445138"
          buttonText="Login"
          onSuccess={responseInstagram}
          onFailure={responseInstagram}
        />
      </div>
    </>
  );
};

export default ProfilePictureUpload;
