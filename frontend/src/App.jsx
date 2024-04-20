import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar/Navbar";
import Login from "./components/main/login/Login";
import Community from "./components/main/community/Community";
import Contribution from "./components/main/contribution/Contribution";
import Loan from "./components/main/loan/Loan";
import MemberList from "./components/main/memberList/MemberList";
import Payment from "./components/main/payment/Payment";
import CreateCommunity from "./components/main/login/CreateCommunity";
import Notification from "./components/main/notification/Notification";
import ProfilePage from "./components/main/profile/ProfilePage";
import Member from "./components/main/member/Member";
import ProtectedRoute from "./utils/ProtectedRoute";
import EditProfile from "./components/main/profile/EditProfile";
import Home from "./components/main/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateCommunity />} />
          <Route path="/community" element={<ProtectedRoute ><Community /></ProtectedRoute>}  />
          <Route path="/contribution" element={<ProtectedRoute><Contribution /></ProtectedRoute>} />
          <Route path="/loan" element={<ProtectedRoute><Loan /></ProtectedRoute>} />
          <Route path="/memberlist" element={<ProtectedRoute><MemberList /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>}/>
          <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}/>
          <Route path="/addnew" element={<ProtectedRoute><Member /></ProtectedRoute>}/>
          <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
