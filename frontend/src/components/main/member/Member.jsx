import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewUserAction } from "../../../redux/slices/userSlices";
import { addNewMemberAction } from "../../../redux/slices/memberSlices";

function Member() {
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "USER", // default to user
    communityName: "",
  });

  const dispatch = useDispatch();
  const communityName = useSelector(
    (state) => state?.user?.userAuth?.communityName
  );

  // Set the communityName in formData when the component mounts
  useState(() => {
    if (communityName !== undefined) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        communityName: communityName,
      }));
    }
  }, [communityName]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewUserAction(formData))
      .unwrap()
      .then((data) => {
        console.log(data);
        dispatch(addNewMemberAction(data)).then(() => {
          setRedirect(true);
          swal({
            title: "Success!",
            text: "New Member Added Successfully",
            icon: "success",
            button: "Ok!",
          });
        });
      })
      .catch((error) => {
        swal({
          title: "Try Again!",
          text: error.message || "Failed to add user",
          icon: "error",
          button: "Ok!",
        });
      });
    setFormData({
      fullName: "",
      email: "",
      password: "",
      role: "USER",
      communityName: "",
    });
  };

  if (redirect) return <Navigate to={"/memberlist"} />;

  return (
    <div className="h-screen p-6 bg-gray-100 flex justify-center">
      <div className="container mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Add new member</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="communityName">Community Name</label>
                      <input
                        type="text"
                        name="communityName"
                        id="communityName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={communityName}
                        readOnly
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
                        required
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
                        required
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="password">password</label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="role">Role</label>
                      <select
                        name="role"
                        id="role"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value="ADMIN">Admin</option>
                        <option value="USER">User</option>
                      </select>
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
  );
}

export default Member;
