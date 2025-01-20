// src/components/HomePage.jsx
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to Expense Tracker</h1>
        <p className="mt-4 text-lg">
          Manage your expenses efficiently and effortlessly.
        </p>
      </header>

      <main className="flex flex-col items-center justify-center px-6 space-y-8">
        <div className="w-full max-w-4xl grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Feature 1 */}
          <div className="p-6 bg-white text-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Track Expenses</h2>
            <p>
              Add, update, and categorize your expenses easily. Get insights into
              where your money goes.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white text-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Filter Expenses</h2>
            <p>
              View expenses by date, category, or a custom range. Find exactly what
              you're looking for in no time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white text-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Secure & Private</h2>
            <p>
              Your data is encrypted and private. Only you have access to your
              financial information.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white text-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Responsive Design</h2>
            <p>
              Access your expense tracker from any device. Fully responsive and
              optimized for all screen sizes.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <button className="px-6 py-3 text-lg font-medium bg-indigo-700 hover:bg-indigo-800 rounded-lg shadow-md">
            Get Started
          </button>
        </div>
      </main>

      <footer className="py-6 text-center mt-8">
        <p>© 2025 Expense Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
