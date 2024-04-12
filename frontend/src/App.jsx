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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateCommunity />} />
          <Route path="/community" element={<ProtectedRoute ><Community /></ProtectedRoute>}  />
          <Route path="/contribution" element={<Contribution />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/memberlist" element={<MemberList />} />
          <Route path="/payment" element={<Payment />}/>
          <Route path="/notification" element={<Notification />}/>
          <Route path="/profile" element={<ProfilePage />}/>
          <Route path="/addnew" element={<Member />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
