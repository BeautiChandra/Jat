import { useState } from "react";
import useForm from "../../Context/UseForm";
export default function JobForm() {
  const { jobs, setJobs } = useForm();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const newJob = { company, role, date, status };
    setJobs([...jobs, newJob]);
    setCompany("");
    setRole("");
    setDate("");
    setStatus("");
  };
  return (
    <div className=" w-full mt-10 flex justify-center ">
      <div className=" h-50  w-[70%] bg-gray-50 rounded-xl shadow-md p-6">
        <h2 className="font-semibold text-xl">Add Job Application</h2>
        <form onSubmit={handlesubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />

            <input
              type="Date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option>Select Status</option>
              <option>Applied</option>
              <option>Shortlisted</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Selected</option>
            </select>
          </div>
          <div className="mt-5 text-right">
            <button
              type="Submit"
              className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-400 transition"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
