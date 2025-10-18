import React from "react";
import {
  FaBriefcase,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const ApplicationStates = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-10">
      {/* Total Applications */}
      <div className="bg-white shadow-md rounded-2xl w-60 text-center p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex justify-center mb-3 text-blue-500 text-3xl">
          <FaBriefcase />
        </div>
        <div className="text-gray-500 text-sm font-medium">
          Total Applications
        </div>
        <div className="text-blue-600 text-3xl font-bold mt-1">45</div>
        <div className="text-gray-400 text-sm mt-1">+5 new this week</div>
      </div>

      {/* Under Review */}
      <div className="bg-white shadow-md rounded-2xl w-60 text-center p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex justify-center mb-3 text-yellow-500 text-3xl">
          <FaClock />
        </div>
        <div className="text-gray-500 text-sm font-medium">Under Review</div>
        <div className="text-yellow-600 text-3xl font-bold mt-1">12</div>
        <div className="text-gray-400 text-sm mt-1">2 interviews scheduled</div>
      </div>

      {/* Selected */}
      <div className="bg-white shadow-md rounded-2xl w-60 text-center p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex justify-center mb-3 text-green-500 text-3xl">
          <FaCheckCircle />
        </div>
        <div className="text-gray-500 text-sm font-medium">Selected</div>
        <div className="text-green-600 text-3xl font-bold mt-1">8</div>
        <div className="text-gray-400 text-sm mt-1">+3 since last month</div>
      </div>

      {/* Rejected */}
      <div className="bg-white shadow-md rounded-2xl w-60 text-center p-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex justify-center mb-3 text-red-500 text-3xl">
          <FaTimesCircle />
        </div>
        <div className="text-gray-500 text-sm font-medium">Rejected</div>
        <div className="text-red-600 text-3xl font-bold mt-1">6</div>
        <div className="text-gray-400 text-sm mt-1">Needs improvement</div>
      </div>
    </div>
  );
};

export default ApplicationStates;
