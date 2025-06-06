import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineSearch,
  AiFillBell,
  AiOutlineMessage,
  AiOutlineBook,
  AiOutlineUnorderedList,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineLogout,
  AiOutlineHome
} from "react-icons/ai";

const items = [
  { name: "Home", path: "home", activeicon: <AiFillHome size={24} /> ,imactiveIcon: <AiOutlineHome size={24}/>,},
  { name: "Explore", path: "explore", activeicon: <AiOutlineSearch size={24} /> ,imactiveIcon: <AiOutlineHome size={24}/>,},
  { name: "Notifications", path: "notifications", activeicon: <AiFillBell size={24} /> ,imactiveIcon: <AiOutlineHome size={24}/>,},
  { name: "Messages", path: "messages", activeicon: <AiOutlineMessage size={24} /> ,imactiveIcon: <AiOutlineHome size={24}/>,},
  { name: "Bookmarks", path: "bookmarks", activeicon: <AiOutlineBook size={24} /> ,imactiveIcon: <AiOutlineHome size={24}/>,},
  { name: "Lists", path: "lists", activeicon: <AiOutlineUnorderedList size={24} /> ,imactiveIcon: <AiOutlineHome size={24}/>,},
  { name: "Profile", path: "profile", activeicon: <AiOutlineUser size={24} /> ,imactiveIcon: <AiOutlineHome size={24}/>,},
  { name: "Settings", path: "settings", activeicon: <AiOutlineSetting size={24} /> ,imactiveIcon: <AiOutlineHome size={24}/>,},
  { name: "Help", path: "help", activeicon: <AiOutlineQuestionCircle size={24} /> ,imactiveIcon: <AiOutlineHome size={24}/>,},
  { name: "Logout", path: "logout", activeicon: <AiOutlineLogout size={24} /> ,imactiveIcon: <AiOutlineHome size={24}/>,},
];

const Sidebar = () => {
  return (
    <div className="w-56 h-screen bg-gray-900 text-white fixed top-0 left-0 p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-5">InstaClone</h1>
     {items.map(({ name, path, activeIcon, inactiveIcon }) => (
          <NavLink
            key={path}
            to={`/home/${path}`}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded hover:bg-gray-200 transition ${
                isActive ? "bg-gray-200 font-bold" : "text-gray-700"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? activeIcon : inactiveIcon}
                <span>{name}</span>
              </>
            )}
          </NavLink>
        ))}
    </div>
  );
};

export default Sidebar;
