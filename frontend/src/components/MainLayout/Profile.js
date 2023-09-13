import React from "react";
import { BsImageFill } from "react-icons/bs";
import { HiVideoCamera } from "react-icons/hi2";
import { RiVideoFill } from "react-icons/ri";
const users = [
  {
    name: "Ravi Ranjan",
    role: "UI/UX Developer",
    profileBgUrl:
      "data:image/jpeg;base64,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",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU",
  },
];

const Profile = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="py-2 uppercase text-slate-300">Stories</div>
      <div className="py-2 gap-4">
        {users.map((user) => (
          <div className="flex flex-col items-center space-y-2">
            <div className="basis-2/4 w-full">
              <div>
                <img
                  className="h-[8rem] w-full rounded-lg"
                  src={user.profileBgUrl}
                  alt="Profile Background"
                />
              </div>
              <div className="flex gap-2 relative -top-3">
                <img
                  className="h-16 w-16 rounded ml-6"
                  src={user.profileUrl}
                  alt="profile"
                ></img>

                <div className="relative leading-4 top-5">
                  <p className="font-bold">{user.name}</p>
                  <span className="text-xs text-gray-400 ">{user.role}</span>
                  {/* <div className="flex items-center">{user.name}</div> */}
                </div>
              </div>
            </div>
            <div className="flex gap-16 my-4">
              <div>
                <p className="text-2xl font-bold">14K</p>
                <p className="text-sm text-slate-300">Followers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1.4K</p>
                <p className="text-sm text-slate-300">Following</p>
              </div>
            </div>
            <div className="basis-1/4 mb-2 w-full">
              <div className="relative mt-2 rounded-md">
                <textarea
                  type="text"
                  name="idea"
                  id="idea"
                  style={{ resize: "none" }}
                  className="block w-full rounded-md border-0 py-1.5 pl-9 pr-20 bg-gray-50 text-gray-900 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="What do you think?"
                ></textarea>
              </div>
            </div>
            <div className="w-full text-bold py-3">
              <hr />
            </div>
            <div className="basis-1/4 w-full mb-2 space-y-4">
              <div className=" flex gap-4 relative rounded-md">
                <div className="flex items-center place-content-center gap-2 w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                  <BsImageFill className="text-blue-400" />
                  <p>Image</p>
                </div>
                <div className="flex items-center place-content-center gap-2 w-full rounded-md border-0 py-1.5 bg-gray-50 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                  <RiVideoFill className="text-pink-500" />
                  <p>Video</p>
                </div>
              </div>
              <div className="flex items-center place-content-center gap-2 w-full rounded-md border-0 py-1.5 pl-5 pr-5 bg-gray-50 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                <HiVideoCamera className="text-yellow-500" />
                <p>Streaming</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
