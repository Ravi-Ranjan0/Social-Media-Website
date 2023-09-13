import React from "react";

const stories = [
  {
    name: "Ravi Ranjan",
    storyUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM0dwKikAQnIII7e1QLKHWPxUwkxL_ccesw&usqp=CAU",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU",
  },
  {
    name: "Ravi Ranjan",
    storyUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM0dwKikAQnIII7e1QLKHWPxUwkxL_ccesw&usqp=CAU",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU",
  },
  {
    name: "Ravi Ranjan",
    storyUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM0dwKikAQnIII7e1QLKHWPxUwkxL_ccesw&usqp=CAU",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU",
  },
  {
    name: "Ravi Ranjan",
    storyUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM0dwKikAQnIII7e1QLKHWPxUwkxL_ccesw&usqp=CAU",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU",
  },
  {
    name: "Ravi Ranjan",
    storyUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM0dwKikAQnIII7e1QLKHWPxUwkxL_ccesw&usqp=CAU",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU",
  },
];

const Stories = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="py-2 uppercase text-slate-300">Stories</div>
      <div className="py-2 flex flex-row gap-4">
        {stories.map((story) => (
          <div className="flex flex-col items-center basis-1/5">
            <div className="h-50 w-full">
              <img
                className="h-full w-full rounded-lg"
                src={story.storyUrl}
                alt="story"
              />
            </div>
            <div className="flex gap-2 relative -top-2">
              <img
                className="h-8 w-8 rounded ml-6"
                src={story.profileUrl}
                alt="profile"
              ></img>
              <div className="flex text-sm items-end"> {story.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
