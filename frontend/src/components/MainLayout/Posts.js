import React, { useEffect, useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { FiMoreHorizontal } from "react-icons/fi";
import { PiSmileyDuotone } from "react-icons/pi";
import { BsFillImageFill } from "react-icons/bs";
import { RiShareForwardBoxFill } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdReportProblem } from "react-icons/md";
import EditPost from "./EditPost";

// paragraph clip
const paragraphstyles = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};
const imguser =
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";
const imgpost =
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";
const imgavatar =
  "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
const Posts = (props) => {
  const [isopen, setisopen] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [isOpenParagraph, setisOpenParagraph] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);

  // paragraph truncate setting

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.scrollHeight, ref.current.clientHeight);
      setShowReadMoreButton(
        ref.current.scrollHeight !== ref.current.clientHeight
      );
    }
  }, []);

  // add emoji
  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  return (
    <div className="flex flex-col gap-2 bg-white  rounded-lg ">
      <div className="flex flex-row justify-between items-center mt-2 mx-4">
        <div className="flex flex-row items-center gap-5">
          <img
            src={imguser}
            alt=""
            className="h-16 w-16 object-cover rounded-lg ring-offset-2 ring-2 ring-blue-500"
          />
          <span className="text-base md:text-base">Username</span>
        </div>
        <div className="flex flex-row justify-end">
          <span className="mx-4 text-slate-400">{props.time}</span>

          <FiMoreHorizontal
            onClick={() => setisopen((prev) => !prev)}
            className=" text-slate-500 w-7 h-7 cursor-pointer"
          />
          <div className="relative mt-8">
            {isopen && (
              <div className=" absolute bg-white shadow-md shadow-gray-400 p-3 rounded-sm -right-4 w-60 border border:gray-300 ">
                {/* save post */}
                <div className="realtive p-2">
                  <BsBookmark
                    className="absolute mt-1 cursor-pointer"
                    size="18"
                  />
                  <EditPost />
                </div>
                {/* Turn notifications */}
                <div className="realtive p-2">
                  <MdNotificationsActive
                    className="absolute mt-1 cursor-pointer"
                    size="18"
                  />
                  <button className="mx-6 text-base ">
                    Turn notifications
                  </button>
                </div>
                {/* hide post */}
                <div className="realtive p-2 ">
                  <BiHide className="absolute mt-1 cursor-pointer" size="18" />
                  <button className="mx-6 text-base ">Hide Post</button>
                </div>
                {/* Delete */}
                <div className="realtive p-2 ">
                  <RiDeleteBin6Line
                    className="absolute mt-1 cursor-pointer"
                    size="18"
                  />
                  <button className="mx-6 text-base ">Delete Post</button>
                </div>
                {/* report */}
                <div className="realtive p-2">
                  <MdReportProblem
                    className="absolute mt-1 text-red-600 cursor-pointer"
                    size="18"
                  />
                  <button className="mx-6 text-base text-red-600">
                    Report
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" mx-2">
        <img src={props.image} alt="" className="w-full" />
      </div>

      <div className="mx-2">
        <p ref={ref} style={isOpenParagraph ? null : paragraphstyles}>
          {props.description}
        </p>
        {showReadMoreButton && (
          <button
            className="text-red-500 cursor-pointer mx-2 hover:underline underline-offset-2 shadow-sm shadow-orange-200"
            onClick={() => setisOpenParagraph(!isOpenParagraph)}
          >
            {isOpenParagraph ? "See Less..." : "See More..."}
          </button>
        )}
      </div>
      <div className="mx-3">
        <hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-300 mb-2" />
      </div>
      <div className=" relative flex flex-row gap-3 mx-4  mb-3 ">
        <img src={imgavatar} alt="" className="h-10 w-10 rounded-lg" />
        <div className="relative flex items-center justify-end ">
          <PiSmileyDuotone
            size="25"
            color="grey"
            className=" cursor-pointer absolute mx-2"
            onClick={() => setShowEmoji(!showEmoji)}
          />
          {/* emoji picker component */}
          {showEmoji && (
            <div className="absolute bottom-[100%] right-2">
              <Picker
                data={data}
                emojiSize={20}
                emojiButtonSize={28}
                onEmojiSelect={addEmoji}
                maxFrequentRows={0}
              />
            </div>
          )}

          <label className="mb-5">
            <input type="file" className="hidden"></input>

            <BsFillImageFill
              size="22"
              color="grey"
              className="cursor-pointer absolute mx-[24rem]"
            />
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add commentor...."
            className="flex  border grow  px-4 h-8 bg-transparent outline-none resize-none w-[28rem]  cursor-text rounded-full ring-blue ring-2 "
          ></textarea>
        </div>
        <div className="flex felx-row  mt-2">
          <AiOutlineHeart
            size="25"
            color="grey"
            className="cursor-pointer md:mx-6 "
          />

          <FaCommentDots
            color="grey"
            size="25"
            className="cursor-pointer md:mx-6 "
          />
          <RiShareForwardBoxFill
            color="grey"
            size="25"
            className="cursor-pointer md:mx-6 "
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
