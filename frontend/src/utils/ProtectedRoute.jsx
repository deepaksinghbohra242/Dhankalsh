import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import {Navigate , useLocation } from 'react-router-dom'

function ProtectedRoute({children}) {
  const user = useSelector(state => state.member.memberAuth);
  return user ? children : <Navigate to={"/login"} />;
}

export default ProtectedRoute
