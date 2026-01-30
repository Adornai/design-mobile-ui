import { CiBatteryFull } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { CiLock } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { RiBuildingLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  c}, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const phoneBg = isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black";
  const boxClass = isDark ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-gray-200 border-gray-200 hover:bg-gray-300";
  const subText = isDark ? "text-gray-400" : "text-gray-500";
  const navBg = isDark ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-500";

  return (
    <>
    <div className={`${phoneBg}`}>
      <div className="bg-gray-600 w-90 h-130 flex  justify-center items-center">
        <div className={`bg-gray-100 w-70 h-150 rounded-4xl shadow-xl/30 shadow-black ${phoneBg}`}>
          <div className="flex justify-between  gap-0 pt-1 mr-5">
            <div className="font-medium cursor-pointer pl-5" onClick={() => alert(formatTime(time))}>{formatTime(time)}</div>
            <div className="h-4 w-4 bg-black rounded-full flex"></div>
            <div className="flex justify-end space-x-2 pr-3 pt-1">
              {" "}
              <GiNetworkBars className="cursor-pointer" onClick={() => alert("5G signal strength is 80%")}/> <FaWifi className="cursor-pointer" onClick={() => alert("Wi-Fi is enabled")}/> <CiBatteryFull className="cursor-pointer" onClick={() => alert("Battery is at 90%")}/>{" "}
            </div>
          </div>
          <div>
            <p className="font-medium pt-5 text-lg pd-3">Settings</p>
          </div>
          <div className={`border border-gray-200 rounded-3xl mt-2 py-2 mx-1 bg-gray-200 flex space-x-2 hover:bg-gray-300 ${boxClass}`}>
            <div>
              <img
                src="src/assets/pfp.jpg"
                alt=""
                className="rounded-full w-15 h-15 cursor-progress"
              />
            </div>
            <div className="pt-2 cursor-pointer" onClick={() => alert("@AdornaiJ")}>
              <p className="font-medium text-sm ">Dubem Adornai</p>
              <p className="text-gray-500 text-sm">adornaijayden@gmail.com</p>
            </div>
          </div>
          <p className="font-sm text-gray-500 flex justify-items-start pl-3 pt-1">
            Account
          </p>
          <div className={`border border-gray-200 rounded-3xl mt-2 py-2 mx-1 bg-gray-200 space-x-2 flex flex-col gap-2 `}>
            <div className={`border border-gray-200 rounded-3xl font-medium text-sm flex items-center gap-2 hover:bg-gray-300 cursor-pointer ${boxClass}`}><CgProfile className="text-2xl ml-5 mr-6"/>Manage Profile<FaArrowRight className="ml-15"/></div>
            <div className={`border border-gray-200 rounded-3xl font-medium text-sm flex items-center gap-2 hover:bg-gray-300 cursor-pointer ${boxClass}`}><CiLock className="text-2xl ml-5 mr-6"/>Passwords & Security<FaArrowRight className="ml-6"/></div>
            <div className={`border border-gray-200 rounded-3xl font-medium text-sm flex items-center gap-2 hover:bg-gray-300 cursor-pointer ${boxClass}`}><IoMdNotificationsOutline className="text-2xl ml-5 mr-6"/>Notifications<FaArrowRight className="ml-19"/></div>
            <div className={`border border-gray-200 rounded-3xl font-medium text-sm flex items-center gap-2 hover:bg-gray-300 cursor-pointer ${boxClass}`}><IoLanguage className="text-2xl ml-5 mr-6"/>Language<span className="flex pl-4 text-gray-500">English</span><FaArrowRight className="ml-6"/></div>
          </div>
          <p className="font-sm text-gray-500 flex justify-items-start pl-3 pt-1">
            Preferences
          </p>
          <div className="border border-gray-200 rounded-3xl mt-2 py-2 mx-1 bg-gray-200 space-x-2 flex flex-col gap-2">
            <div className={`border border-gray-200 rounded-3xl font-medium text-sm flex items-center gap-2 hover:bg-gray-300 cursor-pointer ${boxClass}`}><IoInformationCircleOutline className="text-2xl ml-5 mr-6"/>About Us<FaArrowRight className="ml-23"/></div>
            <div className={`border border-gray-200 rounded-3xl font-medium text-sm flex items-center gap-2 hover:bg-gray-300 cursor-pointer ${boxClass}`} onClick={() => setIsDark(!isDark)}><MdDarkMode className="text-2xl ml-5 mr-6" />Theme: {isDark ? "Dark" : "Light"}<span className="flex pl-4 text-gray-500"></span><FaArrowRight className="ml-12"/></div>
            <div className={`border border-gray-200 rounded-3xl font-medium text-sm flex items-center gap-2 hover:bg-gray-300 cursor-pointer ${boxClass}`}><FaRegCalendarAlt className="text-2xl ml-5 mr-6"/>Appointments<FaArrowRight className="ml-15"/></div>
          </div>
          <p className="font-sm text-gray-500 flex justify-items-start pl-3 pt-1">
            Support
          </p>
          <div className={`border border-gray-200 rounded-3xl bg-gray-200 grid grid-cols-5 py-6 mt-2 text-center ${navBg}`}>
            <div className="text-gray-500 text-xs font-bold grid place-items-center hover:bg-gray-300 cursor-pointer" onClick={() => alert("home coming soon")}><div><GoHome className="text-2xl"/></div>Home</div>
            <div className="text-gray-500 text-xs font-bold grid place-items-center hover:bg-gray-300 cursor-pointer" onClick={() => alert("Explore coming soon")}><div><MdOutlineExplore className="text-2xl"/></div>Explore</div>
            <div className="text-gray-500 text-xs font-bold grid place-items-center hover:bg-gray-300 cursor-pointer" onClick={() => alert("favourite coming soon")}><div><GrFavorite className="text-2xl"/></div>Favourite</div>
            <div className="text-gray-500 text-xs font-bold grid place-items-center hover:bg-gray-300 cursor-pointer" onClick={() => alert("agents coming soon")}><div><RiBuildingLine className="text-2xl"/></div>Agents</div>
            <div className="text-black text-xs font-semibold grid place-items-center bg-gray-400 rounded-2xl cursor-pointer" onClick={() => alert("Already in setting")}><div><IoSettingsOutline className="text-black text-2xlq11q121  "/></div>Settings</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default App;
