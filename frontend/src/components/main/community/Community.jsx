import React from "react";

function Community() {
  const communityName = "Community Name"
  const communityData = [
    { name: "Community ID", value: "R9Y32432148" },
    { name: "Available Amount", value: 10000 },
    { name: "Loan Given", value: 3000 },
    { name: "Total Members", value: 50 },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl flex justify-center font-bold mb-4">{communityName}</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="grid grid-cols-4 gap-4">
            {communityData.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
