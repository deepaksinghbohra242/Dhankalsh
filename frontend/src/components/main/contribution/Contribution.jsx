import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAction } from "../../../redux/slices/userSlices";
import {
  addContributionAction,
  fetchAllContributionAction,
} from "../../../redux/slices/contributionSlice";

const monthNames = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

function Contribution() {
  const dispatch = useDispatch();
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [contributionDetails, setContributionDetails] = useState([]);
  const user = useSelector((state) => state?.user?.userAuth);
  const [addContribution, setAddContribution] = useState({
    userId: user.id, // Assuming user.id exists and contains the current user's ID
    year: new Date().getFullYear(),
    month: monthNames[new Date().getMonth()],
    amount: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "month") {
      setAddContribution({
        ...addContribution,
        month: monthNames[value - 1],
      });
    } else {
      setAddContribution({
        ...addContribution,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    dispatch(fetchAllContributionAction(selectedYear));
  }, [dispatch, selectedYear]);

  const contributions =
    useSelector((state) => state?.contribution?.contributions) || [];

  useEffect(() => {
    const fetchContributorNames = async () => {
      const details = [];
      for (const d of contributions) {
        const user = await dispatch(fetchUserAction(d.userId));
        details.push({
          userId: d.userId,
          name: user.payload.fullName,
        });
      }
      setContributionDetails(details);
    };
    fetchContributorNames();
  }, [contributions, dispatch]);

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const handleAddContribution = () => {
    const { userId, month, year, amount } = addContribution;
    dispatch(
      addContributionAction({
        userId: userId,
        month: month.toUpperCase(), // Convert month to uppercase
        year: parseInt(year), // Parse year to integer
        amount: parseInt(amount), // Parse amount to integer
      })
    );
    // Reset the addContribution state after adding the contribution
    setAddContribution({
      ...addContribution,
      year: "",
      month: "",
      amount: "",
    });
  };

  const filteredContributions = contributions.map((member) => {
    const memberDetails = contributionDetails.find(
      (detail) => detail.userId === member.userId
    );
    const name = memberDetails ? memberDetails.name : "";
    return {
      ...member,
      name: name,
      contributions: member.contributions.filter(
        (_, index) =>
          new Date(selectedYear, index).getFullYear() === selectedYear
      ),
    };
  });

  const handleSearch = () => {};

  return (
    <div className="text-gray-900 bg-gray-200">
      <div className="p-4 flex justify-center">
        <h1 className="text-3xl">{user?.communityName} Contribution</h1>
      </div>
      {/* Search Bar */}
      <div className="px-3 py-4">
        <div className="flex justify-center gap-3 items-center w-full">
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
              {Array.from({ length: 10 }, (_, index) => {
                const year = new Date().getFullYear() - index;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      {/* Add Contribution Card */}
      <div className="p-4 bg-white shadow-md rounded mb-1">
        <h2 className="text-lg flex justify-center font-semibold mb-2">
          Add Contribution
        </h2>
        <div className="flex gap-3 justify-center items-center">
          <select
            name="month"
            value={addContribution.month.toUpperCase}
            onChange={handleChange}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4"
          >
            {[...Array(12)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {new Date(0, index).toLocaleString("default", {
                  month: "long",
                })}
              </option>
            ))}
          </select>
          <select
            name="year"
            value={addContribution.year}
            onChange={handleChange}
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4"
          >
            {Array.from({ length: 10 }).map((_, index) => {
              const year = new Date().getFullYear() - index;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          <input
            name="amount"
            type="number"
            value={addContribution.amount}
            onChange={handleChange}
            placeholder="Amount"
            className="w-32 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4"
          />
          <button
            onClick={handleAddContribution}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Contribution
          </button>
        </div>
      </div>

      {/* Member List */}
      <div className="overflow-x-auto">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              {[...Array(12)].map((_, index) => (
                <th key={index} className="text-left p-3 px-5">
                  {new Date(0, index).toLocaleString("default", {
                    month: "long",
                  })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredContributions.map((member) => (
              <tr
                key={member.id}
                className="border-b hover:bg-orange-100 bg-gray-100"
              >
                <td className="p-3 px-5">{member.name}</td>
                {member.contributions.map((contribution, index) => (
                  <td
                    key={index}
                    className={`p-3 border px-5 ${
                      contribution === 0
                        ? "text-red-500"
                        : "bg-green-300 font-semibold"
                    }`}
                  >
                    {contribution === 0 ? "Not contributed" : contribution}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contribution;
