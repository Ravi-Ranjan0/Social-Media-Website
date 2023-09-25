import Activity from "../MainLayout/Activity";
import Friends from "../MainLayout/Friends";
import Group from "../MainLayout/Group";
import Navbar from "../MainLayout/Navbar";
// import Posts from "../MainLayout/Posts";
import Profile from "../MainLayout/Profile";
// import Stories from "../MainLayout/Stories";

const MyProfile = () => {
  return (
    <>
      <div className="bg-zinc-100">
        <Navbar />
        <div className="grid grid-cols-12 gap-4 m-4">
          <div className="col-span-2 space-y-4">
            <Group />
            <Friends />
          </div>
          <div className="col-span-7 space-y-4"></div>
          <div className="col-span-3 space-y-4">
            <Profile />
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
