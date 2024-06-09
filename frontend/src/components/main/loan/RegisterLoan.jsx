import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { addLoanAction } from '../../../redux/slices/loanSlice';
import swal from 'sweetalert';
import { Navigate } from 'react-router-dom';

function RegisterLoan() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state?.user?.userAuth?.id);
  const communityName = useSelector(state => state?.user?.userAuth?.communityName);
  const [redirect , setRedirect] = useState(false);

  const [loanData, setLoanData] = useState({
    userId: userId,
    communityName: communityName,
    borrower: "",
    purpose: "",
    amount: "",
    dateOfTaking: "",
    deadline: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoanData({ ...loanData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addLoanAction(loanData))
      .then((data)=>{
        setRedirect(true);
        swal({
          title: "Success!",
          text: "Loan registration Successfully",
          icon: "success",
          button: "Ok!",
        });
      })
      .catch(() => {
        swal({
          title: "Try Again!",
          text: "Loan registration not added",
          icon: "Try again ",
          button: "Ok!",
        });
      });
  };

  if(redirect) return <Navigate to="/loan" />
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="py-4 px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Register Loan</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
                User ID
              </label>
              <input
                type="text"
                name="userId"
                id="userId"
                value={loanData.userId}
                disabled
                className="w-full py-2 px-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="communityName">
                Community Name
              </label>
              <input
                type="text"
                name="communityName"
                id="communityName"
                value={loanData.communityName}
                disabled
                className="w-full py-2 px-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="borrower">
                Borrower
              </label>
              <input
                type="text"
                name="borrower"
                id="borrower"
                value={loanData.borrower}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purpose">
                Purpose
              </label>
              <input
                type="text"
                name="purpose"
                id="purpose"
                value={loanData.purpose}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={loanData.amount}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfTaking">
                Date of Taking
              </label>
              <input
                type="date"
                name="dateOfTaking"
                id="dateOfTaking"
                value={loanData.dateOfTaking}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                id="deadline"
                value={loanData.deadline}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Loan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterLoan;
