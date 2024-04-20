// HomePage.js

import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-semibold">Community Loans</h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-800 font-semibold mb-4">Join a Community</h2>
            <p className="text-gray-600">Join one of our communities and get access to loans with better terms and lower interest rates through the power of community lending.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Explore Communities</button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-800 font-semibold mb-4">Apply for a Loan</h2>
            <p className="text-gray-600">Apply for a loan tailored to your needs. Our community-focused approach ensures fair terms and personalized support throughout the process.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Apply Now</button>
          </div>
        </div>
      </main>
      <footer className="bg-blue-500 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-white">© 2024 Community Loans. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
