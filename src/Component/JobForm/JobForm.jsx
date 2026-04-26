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
      <div className="w-[70%] bg-gray-50 rounded-xl shadow-md p-6">
        <h2 className="font-semibold text-xl"></h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="border p-2 rounded-md"
            />

            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleChange}
              className="border p-2 rounded-md"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border p-2 rounded-md"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border p-2 rounded-md"
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
              className="bg-blue-500 text-white px-5 py-2 rounded-md"
            ></button>
          </div>
        </form>
      </div>
    </div>
  );
}
