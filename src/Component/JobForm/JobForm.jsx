import { useState } from "react";
import { UseForm } from "../../Context/FormContext.jsx";

export default function JobForm() {
  const { addJob } = UseForm();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "",
    date: "",
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
    addJob(formData);
    setFormData({
      company: "",
      role: "",
      status: "",
      date: "",
    });
  };

  return (
    <div className="w-full px-4 mt-10 flex justify-center">
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-5 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6">
          Track New Application
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Status</option>
              <option>Applied</option>
              <option>Shortlisted</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Selected</option>
            </select>
          </div>

          <div className="mt-5 flex justify-center sm:justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 font-medium text-white px-6 py-3 rounded-md shadow-md transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
