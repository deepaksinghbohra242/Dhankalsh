import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function EditProfile() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user?.userAuth);
  console.log(userData);
  const [formData, setFormData] = useState({
    fullName: userData?.fullName,
    id: userData?.id,
    fatherName: "",
    motherName: "",
    profession: "",
    address: "",
    phoneNumber: "",
    dob: "",
    startDate: "",
    communityName: userData?.communityName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({
      userName: "",
      id: "",
      fatherName: "",
      motherName: "",
      profession: "",
      address: "",
      phoneNumber: "",
      dob: "",
      startDate: "",
      communityName: "",
    });
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16 ">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white flex justify-center">
            Edit Profile
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-1">
                <label
                  htmlFor="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your fullName"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ID
                </label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  value={formData.id}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your ID"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="fatherName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Father Name
                </label>
                <input
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your Father Name"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="communityName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Community Name
                </label>
                <input
                  type="text"
                  name="communityName"
                  id="communityName"
                  value={formData.communityName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your Community Name"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="motherName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mother Name
                </label>
                <input
                  type="text"
                  name="motherName"
                  id="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your Mother Name"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="profession"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Profession
                </label>
                <input
                  type="text"
                  name="profession"
                  id="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your Profession"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="dob"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your Date of Birth"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Starting Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your starting date"
                  required
                />
              </div>
              <div className="sm:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default EditProfile;
