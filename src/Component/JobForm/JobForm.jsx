import { useState, useEffect } from "react";
import useForm from "../../Context/UseForm";

export default function JobForm() {
  const { jobs, setJobs, editIndex, setEditIndex } = useForm();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "",
    date: "",
  });

  // ✅ Fill form when editing
  useEffect(() => {
    if (editIndex !== null) {
      setFormData(jobs[editIndex]);
    }
  }, [editIndex, jobs]);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit (Add + Edit)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedJobs = [...jobs];
      updatedJobs[editIndex] = formData;
      setJobs(updatedJobs);
      setEditIndex(null);
    } else {
      setJobs([...jobs, formData]);
    }

    // Reset form
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
        <h2 className="font-semibold text-xl">
          {editIndex !== null ? "Edit Job" : "Add Job Application"}
        </h2>

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
            >
              {editIndex !== null ? "Update Job" : "Add Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
