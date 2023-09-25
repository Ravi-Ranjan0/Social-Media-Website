import Activity from "./Activity";
import Friends from "./Friends";
import Group from "./Group";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Profile from "./Profile";
import Stories from "./Stories";

import { useState, useEffect } from 'react';
import axios from "axios";

const MainLayout = () => {

  const [PostArray, updatePostArray] = useState([]);

  const FetchAllPost = async () => {
    const res = await axios.get('http://localhost:8080/post');
    updatePostArray(res.data.posts);
    console.log(res);
  }

  console.log(PostArray);

  useEffect(() => {
    FetchAllPost();
  }, []);

  const allPost = PostArray.map(
    (post) =>
      <Posts
        key={post._id}
        description={post.desc}
        image={post.img}
        time={post.updatedAt}
      />
  );

  return (
    <>
      <div className="bg-zinc-100">
        <Navbar />
        <div className="grid grid-cols-12 gap-4 m-4">
          <div className="col-span-2 space-y-4">
            <Group />
            <Friends />
          </div>
          <div className="col-span-7 space-y-4">
            <Stories />
            {/* <Posts /> */}
            {allPost}
          </div>
          <div className="col-span-3 space-y-4">
            <Profile />
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
