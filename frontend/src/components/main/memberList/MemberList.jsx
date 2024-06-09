import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersByCommunityNameAction } from "../../../redux/slices/userSlices";

function MemberList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchUsersByCommunityNameAction());
  }, [dispatch]);

  const communityName = useSelector((state) => state?.user?.userAuth?.communityName);
  const members = useSelector((state) => state?.user?.usersData) || [];
  const checkAdmin = useSelector(state => state?.user?.userAuth?.role);
  const isAdmin = checkAdmin === 'ADMIN';

  const handleViewMember = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // You can perform search logic here if needed
    console.log("Searching...");
  };

  const filteredMembers = members.filter(member =>
    member.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-gray-900 bg-gray-200">
      <div className="p-4 flex justify-center">
        <h1 className="text-3xl capitalize">{communityName} Member List</h1>
      </div>
      <div className="px-3 py-4">
        <div className="mb-4 flex justify-center gap-3 items-center w-full">
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
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
            {Array.isArray(filteredMembers) && filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <tr key={member.id} className="border-b hover:bg-orange-100 bg-gray-100">
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
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center">
                  No members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MemberList;
