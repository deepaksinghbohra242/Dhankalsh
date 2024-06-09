// UserProfile.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMemberAction } from "../../../redux/slices/memberSlices";

function UserProfile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(getMemberAction(id)).then((response) => {
        setUserDetails(response?.payload);
      });
    }
  }, [dispatch, id]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  const userFields = Object.entries(userDetails);

  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-4xl flex mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* User Image */}
        <div className="w-1/3 bg-gray-200 p-4">
          <div className="relative">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&pid=Api&P=0&h=220"
              alt="User"
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* User Details */}
        <div className="w-2/3 p-4">
          <h2 className="text-2xl font-bold mb-4">{userDetails.fullName}</h2>
          {userFields.map(([key, value], index) => (
            <div key={index} className="mb-4">
              <div className="block text-gray-700 capitalize text-sm font-bold mb-2">
                {key}
                <p className="text-gray-800 font-medium">{value !== null ? value : "N/A"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
