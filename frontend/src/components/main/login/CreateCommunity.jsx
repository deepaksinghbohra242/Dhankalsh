import React, { useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { registerUserAction } from "../../../redux/slices/memberSlice";
import {Navigate} from "react-router-dom"
import swal from 'sweetalert';

function CreateCommunity() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    communityName: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserAction(formData))
      .unwrap()
      .then(() => {
        setRedirect(true);
        swal({
          title: "Success!",
          text: "Account Created Successfully",
          icon: "success",
          button: "Ok!",
        });
      })
      .catch((error) => {
        swal({
          title: "Try Again!",
          text: error.message || "Failed to register user",
          icon: "error",
          button: "Ok!",
        });
      });
  };
  if(redirect) return <Navigate to={"/loan"} />
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  if(redirect){
    return <Navigate to={"/login"} />
  }
  return (
    <>
      <div className="h-screen p-6 bg-gray-100 flex justify-center">
        <div className="container mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Community Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit}>
                    {" "}
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="communityName">Community Name</label>
                        <input
                          type="text"
                          name="communityName"
                          id="communityName"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.communityName}
                          onChange={handleChange}
                          placeholder="Enter community name"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter full name"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@gmail.com"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter address"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm password"
                        />
                      </div>

                      <div className="md:col-span-5 text-right">
                        <div className="inline-flex justify-center items-end">
                          <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCommunity;
