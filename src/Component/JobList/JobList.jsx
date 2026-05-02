import { useState } from "react";
import Jobcard from "../Jobcard/Jobcard";
import { FaSearch } from "react-icons/fa";
import { UseForm } from "../../Context/FormContext.jsx";

export default function JobList() {
  const { jobsData } = UseForm();

  // Input field value
  const [searchInput, setSearchInput] = useState("");

  // Actual search value after clicking search icon
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortDate, setSortDate] = useState("Sort by Date");

  const FilteredJobs = jobsData
    .filter((job) => {
      const matchSearch = job.company
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All Status" || job.status === statusFilter;

      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      if (sortDate === "Newest First")
        return new Date(b.date) - new Date(a.date);
      if (sortDate === "Oldest First") {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });

  // Search button click function
  const handleSearch = () => {
    setSearch(searchInput);
  };

  return (
    <div className="w-full mt-8 flex items-center flex-col gap-4">
      <div className="w-[70%] flex justify-between items-center p-4 rounded-md shadow">
        {/* Filters */}
        <div className="flex gap-3">
          <select
            className="p-2 px-4 shadow rounded bg-gray-400"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Applied</option>
            <option>Shortlisted</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Selected</option>
          </select>

          <select
            className="p-2 px-4 shadow rounded bg-gray-400"
            value={sortDate}
            onChange={(e) => setSortDate(e.target.value)}
          >
            <option>Sort by Date</option>
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>

        {/* Search Box */}
        <div className="relative w-64 bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pr-10 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <FaSearch
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>

      {/* Job List */}
      <div className="w-[70%] h-full mb-5 bg-gray-50 rounded-md">
        {FilteredJobs.length > 0 ? (
          FilteredJobs.map((job) => <Jobcard key={job.id} job={job} />)
        ) : (
          <p className="text-center m-10 text-gray-500 ">
            {jobsData.length === 0
              ? "No jobs added yet."
              : "No matching jobs found."}
          </p>
        )}
      </div>
    </div>
  );
}
