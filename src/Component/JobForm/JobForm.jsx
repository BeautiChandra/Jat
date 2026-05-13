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
    <div className="w-full  mt-10 flex justify-center">
      <div className="w-[70%] bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Track New Application
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 "
            />

            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 "
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 "
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 "
            >
              <option value="">Select Status</option>
              <option>Applied</option>
              <option>Shortlisted</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Selected</option>
            </select>
          </div>

          <div className="mt-5 text-right">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 font-medium text-white px-5 py-2 rounded-md shadow-md"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
