import React from "react";

function ProfilePage() {
  const userData = [
    { label: "Name", value: "someone" },
    {
      label: "Father's Name",
      value: "some",
    },
    {
      label: "Occupation",
      value: "sarkari naukri",
    },
    {
      label: "Phone No.",
      value: "9192834423",
    },
    {
      label: "Age",
      value: "44",
    },
    {
      label: "Address",
      value: "saomwesdrfewnn",
    },
    {
      label: "ID",
      value: "fds0if-03423",
    },
    {
      label: "KYC Status",
      value: "verified",
    },
  ];

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
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 text-sm rounded-bl-lg">
              Upload Photo
            </div>
          </div>
        </div>
        {/* User Details */}
        <div className="w-2/3 p-4">
          {userData.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="block text-gray-700 text-sm font-bold mb-2">
                {item.label}
              <p className="text-gray-800 font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
