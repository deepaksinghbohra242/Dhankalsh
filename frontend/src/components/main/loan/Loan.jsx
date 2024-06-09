// Loan.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllLoanAction } from "../../../redux/slices/loanSlice";

function Loan() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Fetch communityName from userAuth state
  const communityName = useSelector(state => state?.user?.userAuth?.communityName);

  useEffect(() => {
    // Dispatch action to get all loans for the given community name
    if (communityName) {
      dispatch(getAllLoanAction(communityName));
    }
  }, [dispatch, communityName]);

  // Fetch loans from the Redux state
  const loans = useSelector(state => state?.loan?.loans) || [];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter loans based on the search term (case-insensitive search on borrower's name)
  const filteredLoans = Array.isArray(loans)
    ? loans.filter((loan) =>
        loan.borrower.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl flex justify-center font-bold mb-4">Loan List</h1>
      
      <div className="mb-4 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search by borrower..."
          className="w-1/3 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Link to="/register-loan">
          <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Add Loan
          </button>
        </Link>
      </div>
      
      <table className="w-full text-md bg-white shadow-md rounded mb-4">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3 px-5">Borrower</th>
            <th className="text-left p-3 px-5">Purpose</th>
            <th className="text-left p-3 px-5">Amount</th>
            <th className="text-left p-3 px-5">Date of Taking</th>
            <th className="text-left p-3 px-5">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {filteredLoans.map((loan) => (
            <tr key={loan.id} className="border-b hover:bg-gray-100 bg-gray-50">
              <td className="p-3 px-5">{loan.borrower}</td>
              <td className="p-3 px-5">{loan.purpose}</td>
              <td className="p-3 px-5">${loan.amount.toFixed(2)}</td>
              <td className="p-3 px-5">{moment(loan.dateOfTaking).format("YYYY-MM-DD")}</td>
              <td className="p-3 px-5">{moment(loan.deadline).format("YYYY-MM-DD")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Loan;
