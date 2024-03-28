import React from 'react'
import AdminContribution from './AdminContribution';
import UserContribution from './UserContribution';

function Contribution() {
  const isAdmin = true;
  return (
    <>
    {
      isAdmin ? <AdminContribution /> : <UserContribution />
    }
    </>
  )
}

export default Contribution
