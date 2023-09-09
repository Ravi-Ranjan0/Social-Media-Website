import "./App.css";
import Activity from "./components/Activity";
import Friends from "./components/Friends";
import Group from "./components/Group";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Stories from "./components/Stories";

function App() {
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
            <Posts />
          </div>
          <div className="col-span-3 space-y-4">
            <Profile />
            <Activity />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
