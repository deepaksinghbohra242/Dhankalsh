import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTotalContribution, fetchTotalUser } from '../../../redux/slices/userSlices';
import { getTotalLoanAmount } from "../../../redux/slices/loanSlice";

function Community() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.userAuth);
  const communityName = user?.communityName;
    // Local state for total contribution
  const [totalContribution, setTotalContribution] = useState(null);
  const [totalMember , setTotalMember] = useState(null);
  const [totalLoan , setTotalLoan] = useState(null)

  useEffect(() => {
    if (communityName) {
      // Dispatch the action and handle the result
      dispatch(fetchTotalContribution(communityName)).then((response) => {
        setTotalContribution(response.payload); // Assuming the payload contains the total contribution
      });
      dispatch(fetchTotalUser(communityName)).then((response)=>{
        setTotalMember(response.payload);
      })
      dispatch(getTotalLoanAmount(communityName)).then((response) => {
        setTotalLoan(response.payload);
      })
    }
    
  }, [dispatch, communityName]);

  const communityData = [
    { name: "Community ID", value: user?.id },
    { name: "Available Amount", value: totalContribution - totalLoan },
    { name: "Loan Given", value: totalLoan },
    { name: "Total Members", value: totalMember },
  ];

  if (totalContribution === null) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl flex justify-center font-bold mb-4">{communityName}</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="grid grid-cols-4 gap-4">
            {communityData.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
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
