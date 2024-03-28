import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersByCommunityNameAction } from "../../../redux/slices/memberSlice";

function MemberList() {
  const isAdmin = true;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersByCommunityNameAction());
  }, [dispatch]);

  const members = useSelector((state) => state?.member?.usersData) || [];

  const handleEditMember = (id) => {
    console.log("Editing member with id:", id);
  };

  const handleViewMember = (id) => {
    console.log("Viewing member details", id);
  };

  const handleDeleteMember = (id) => {
    console.log("Deleting member with id:", id);
  };

  const handleSearch = () => {
    // Logic to handle search
    console.log("Searching...");
  };

  const handleAddNew = () => {
    // Logic to add new member
    console.log("Adding new member...");
  };

  return (
    <>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex justify-center">
          <h1 className="text-3xl">Community Name Member List</h1>
        </div>
        <div className="px-3 py-4">
          <div className="mb-4 flex justify-center gap-3 items-center w-full">
            <div className="w-1/3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4"
              />
            </div>
            <div>
              <button
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Search
              </button>
            </div>
            {isAdmin && (
              <div>
                <Link
                  to="/addnew"
                  className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add New
                </Link>
              </div>
            )}
          </div>
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Role</th>
                <th></th>
              </tr>
              {members.map((member) => (
                <tr
                  key={member.id}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5">{member.fullName}</td>
                  <td className="p-3 px-5">{member.email}</td>
                  <td className="p-3 px-5">{member.role}</td>
                  <td className="p-3 px-5 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleViewMember(member.id)}
                      className="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      View
                    </button>
                    {isAdmin ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleEditMember(member.id)}
                          className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteMember(member.id)}
                          className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </>
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MemberList;
