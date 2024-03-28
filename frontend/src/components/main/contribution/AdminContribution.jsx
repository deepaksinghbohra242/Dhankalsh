import React, { useState } from "react";

function AdminContribution() {
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", contributions: [100, 200, 0, 300, 250, 200, 150, 300, 0, 200, 150, 300] },
    { id: 2, name: "Jane Smith", email: "jane@example.com", contributions: [200, 300, 250, 0, 350, 300, 0, 400, 350, 300, 250, 400] },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", contributions: [150, 250, 0, 350, 300, 250, 0, 350, 300, 250, 0, 350] },
  ]);

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleSearch = () => {
    // Logic to handle search
    console.log("Searching...");
  };

  const filteredContributions = members.map((member) => {
    return {
      ...member,
      contributions: member.contributions.filter((_, index) => new Date(selectedYear, index).getFullYear() === selectedYear)
    };
  });

  return (
    <>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex justify-center">
          <h1 className="text-3xl">Community Name Contribution</h1>
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
            <div>
              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4"
              >
                {[...Array(5)].map((_, index) => (
                  <option key={index} value={selectedYear - index}>{selectedYear - index}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Name</th>
                  {[...Array(12)].map((_, index) => (
                    <th key={index} className="text-left p-3 px-5">
                      {new Date(0, index).toLocaleString('default', { month: 'long' })}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredContributions.map((member) => (
                  <tr key={member.id} className="border-b hover:bg-orange-100 bg-gray-100">
                    <td className="p-3 px-5">{member.name}</td>
                    {member.contributions.map((contribution, index) => (
                      <td
                        key={index}
                        className={`p-3 px-5 ${contribution === 0 ? 'text-red-500' : ''}`}
                      >
                        {contribution === 0 ? 'Not contributed' : contribution}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminContribution;
