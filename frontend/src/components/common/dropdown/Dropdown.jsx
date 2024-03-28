import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { logoutUserAction } from "../../../redux/slices/memberSlice";

function Dropdown() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false); 

  const menuItems = [
    { label: "Change Password", value: "/changepassword" },
    { label: "KYC", value: "/kyc" },
    { label: "Profile", value: "/profile" },
    { label: "Log Out", value: "/logout" }
  ];

  const logout = () => {
    dispatch(logoutUserAction())
      .then(() => {
        swal({
          title: "Success!",
          text: "Logged out successfully",
          icon: "success",
          button: "Ok"
        });
        setRedirect(true);
      })
      .catch((error) => {
        swal({
          title: "Error!",
          text: error.message || "Failed to log out",
          icon: "error",
          button: "Ok"
        });
      });
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="relative inline-block text-left">
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
              to={item.value === "/logout" ? "#" : item.value}
              onClick={item.value === "/logout" ? logout : null}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
