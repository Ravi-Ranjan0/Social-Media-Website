import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Modal } from "@mui/base";
import axios from "axios";

const style = {
  position: "absolute",
  top: "55%",
  left: "45%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "1px solid #fff",
  boxShadow: 16,
  p: 4,
};

export default function CreatePost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    setImageURL(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    editPost({ img: imageURL, desc: description });
  };

  async function editPost(data) {
    try {
      const res = await axios.patch("http://localhost:8080//post/:id", data);
      console.log(res);
      // navigate("/login");
    } catch (err) {
      console.error("Error creating post", err);
    }
  }

  return (
    <>
      <button className="mx-6 text-base " onClick={handleOpen}>
        Edit Post
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-lg">
          <div className="w-full">
            <div className="text-lg text-sky-500 mx-auto w-fit p-4 font-bold">
              Edit Post
            </div>
            <form onSubmit={onSubmitHandler}>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Image URL
                </span>
                <input
                  type="text"
                  name="ImageURL"
                  onChange={handleImageChange}
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                />
              </label>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Description
                </span>
                <textarea
                  type="text"
                  name="Description"
                  rows={4}
                  onChange={handleDescriptionChange}
                  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="This is a post..."
                />
              </label>
              <div className="mx-auto w-fit p-2 mt-3">
                <button class="rounded-3xl text-white p-2 bg-sky-500 hover:bg-sky-700 ...">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
}
