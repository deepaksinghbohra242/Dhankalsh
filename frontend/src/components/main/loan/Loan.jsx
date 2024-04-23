import React, { useState, useEffect } from "react";
import axios from "axios";

function Loan() {
  const [loans, setLoans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newLoan, setNewLoan] = useState({
    memberName: "",
    amount: "",
    date: "",
    deadline: "",
  });

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const response = await axios.get("/api/v1/loan/getAll");
      if (Array.isArray(response.data)) {
        setLoans(response.data);
      } else {
        console.error("Invalid response format for loans:", response.data);
      }
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewLoan((prevLoan) => ({
      ...prevLoan,
      [name]: value,
    }));
  };

  const handleAddLoan = async () => {
    try {
      const response = await axios.post("/api/v1/loan/add", newLoan);
      setLoans([...loans, response.data]);
      setNewLoan({
        memberName: "",
        amount: "",
        date: "",
        deadline: "",
      });
    } catch (error) {
      console.error("Error adding loan:", error);
    }
  };

  const filteredLoans = loans.filter((loan) =>
    loan.memberName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl flex justify-center font-bold mb-4">Loan List</h1>
      <div className="mb-4 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search by member name..."
          className="w-1/3 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => console.log("Search")}
        >
          Search
        </button>
      </div>
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3 px-5">Member Name</th>
            <th className="text-left p-3 px-5">Amount</th>
            <th className="text-left p-3 px-5">Date</th>
            <th className="text-left p-3 px-5">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {filteredLoans.map((loan) => (
            <tr key={loan.id} className="border-b hover:bg-gray-100 bg-gray-50">
              <td className="p-3 px-5">{loan.memberName}</td>
              <td className="p-3 px-5">{loan.amount}</td>
              <td className="p-3 px-5">{loan.date}</td>
              <td className="p-3 px-5">{loan.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loan;
