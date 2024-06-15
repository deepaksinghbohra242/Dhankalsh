import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMemberAction } from "../../../redux/slices/memberSlices";

function ProfilePage() {
  const userData = useSelector((state) => state?.user?.userAuth);
  const profileId = userData?.id;
  const [memberData, setMemberData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (profileId) {
      dispatch(getMemberAction(profileId)).then((response) => {
        setMemberData(response?.payload);
      });
    }
  }, [dispatch, profileId]);

  const isCurrentUserProfile = userData?.id === profileId;

  // Extract only the date part from dob and startDate
  const dobDate = memberData?.dob ? new Date(memberData.dob) : null;
  const startDateDate = memberData?.startDate ? new Date(memberData.startDate) : null;

  // Filter out keys from memberData
  const filteredMemberData = memberData
    ? Object.fromEntries(
        Object.entries(memberData).filter(
          ([key]) =>
            key !== "id" &&
            key !== "userId" &&
            key !== "fullName" &&
            key !== "communityName"
        )
      )
    : null;
  // Filter out the token key from userData
  const filteredUserData = Object.entries(userData)
    .filter(([key]) => key !== "token")
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  return (
    <>
      { (
        <div className="flex justify-end">
          <Link
            to="/edit-profile"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit Details
          </Link>
        </div>
      )}
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
              <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 text-sm rounded-bl-lg">
                Upload Photo
              </div>
            </div>
          </div>
          {/* User Details */}
          <div className="w-2/3 p-4">
            {/* Render filteredUserData */}
            {Object.entries(filteredUserData).map(([key, value], index) => (
              <div key={index} className="mb-4">
                <div className="block text-gray-700 text-sm font-bold mb-2">
                  {key}
                  <p className="text-gray-800 font-medium">{value}</p>
                </div>
              </div>
            ))}
            {/* Render filteredMemberData */}
            {filteredMemberData &&
              Object.entries(filteredMemberData).map(([key, value], index) => (
                <div key={index} className="mb-4">
                  <div className="block text-gray-700 capitalize text-sm font-bold mb-2">
                    {key}
                    {/* Displaying date part only */}
                    <p className="text-gray-800 font-medium">
                      {key === "dob" && dobDate
                        ? dobDate.toLocaleDateString()
                        : key === "startDate" && startDateDate
                        ? startDateDate.toLocaleDateString()
                        : value}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
