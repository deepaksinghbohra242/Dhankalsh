import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import { useSelector } from "react-redux";

const adminMenu = [
  { path: "/community", value: "Community" },
  { path: "/memberlist", value: "Member List" },
  { path: "/contribution", value: "Contribution" },
  { path: "/loan", value: "Loan" },
  { path: "/notification", value: "Notifications" },
];
const userMenu = [
  { path: "/community", value: "Community" },
  { path: "/memberlist", value: "Member List" },
  { path: "/contribution", value: "Contribution" },
  { path: "/notification", value: "Notifications" },
];

function Navbar() {
  const state = useSelector((state) => state?.user?.userAuth);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const isAdmin = state?.role === 'ADMIN';
  const userImage =
    "https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png";

  const location = useLocation();

  const handleMenuItemClick = (path) => {
    setActiveMenuItem(path);
  };

  const handleDropdownHover = () => {
    setIsDropdownHovered(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownHovered(false);
  };
  const loggedIn = !!state; 

  return (
    <>
      <nav className={`p-4 ${isAdmin ? 'bg-green-500' : 'bg-gray-800'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">TGA</div>
          <ul className="hidden md:flex space-x-4">
            {loggedIn && isAdmin ?
              adminMenu.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    to={menuItem.path}
                    className={`text-white m-3 font-bold hover:text-red-400 ${
                      location.pathname === activeMenuItem ? "text-red-400" : ""
                    }`}
                    onClick={() => handleMenuItemClick(menuItem.path)}
                  >
                    {menuItem.value}
                  </Link>
                </li>
              )) : loggedIn && userMenu.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    to={menuItem.path}
                    className={`text-white m-3 font-bold hover:text-red-400 ${
                      location.pathname === activeMenuItem ? "text-red-400" : ""
                    }`}
                    onClick={() => handleMenuItemClick(menuItem.path)}
                  >
                    {menuItem.value}
                  </Link>
                </li>
              ))}
          </ul>
          {loggedIn ? (
            <div
              className="relative flex items-center gap-2"
              onMouseEnter={handleDropdownHover}
              onMouseLeave={handleDropdownLeave}
            >
              <img
                src={userImage}
                alt="User"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              <span className="text-white">{state?.fullName}</span>
              {isDropdownHovered && <Dropdown />}
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                to={"/login"}
                className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="bg-green-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-600"
              >
                Create Community
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
