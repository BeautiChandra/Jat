import { useState } from "react";
import Jobcard from "../Jobcard/Jobcard";
import { FaSearch } from "react-icons/fa";
import { UseForm } from "../../Context/FormContext.jsx";

export default function JobList() {
  const { jobsData } = UseForm();

  // Search input value
  const [searchInput, setSearchInput] = useState("");

  // Actual search value
  const [search, setSearch] = useState("");

  // Filters
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortDate, setSortDate] = useState("Sort by Date");

  // Filter + Sort Jobs
  const FilteredJobs = jobsData
    .filter((job) => {
      // Search by company OR role
      const matchSearch =
        job.company?.toLowerCase().includes(search.toLowerCase()) ||
        job.role?.toLowerCase().includes(search.toLowerCase());

      // Filter by status
      const matchStatus =
        statusFilter === "All Status" || job.status === statusFilter;

      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      if (sortDate === "Newest First") {
        return new Date(b.date) - new Date(a.date);
      }

      if (sortDate === "Oldest First") {
        return new Date(a.date) - new Date(b.date);
      }

      return 0;
    });

  // Search icon click
  const handleSearch = () => {
    setSearch(searchInput);
  };

  return (
    <div className="w-full mt-8 flex items-center flex-col gap-4 px-4">
      {/* Top Filter Section */}
      <div className="w-full max-w-6xl bg-white flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center p-4 rounded-xl shadow-md">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto md:flex justify-betweenx">
          {/* Status Filter */}
          <select
            className="w-full sm:w-auto p-3 px-4 shadow rounded bg-gray-200 outline-none"
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

          {/* Date Sorting */}
          <select
            className="w-full sm:w-auto p-3 px-4 shadow rounded bg-gray-200 outline-none"
            value={sortDate}
            onChange={(e) => setSortDate(e.target.value)}
          >
            <option>Sort by Date</option>
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>

        {/* Search Box */}
        <div className="relative w-full lg:w-72">
          <input
            type="text"
            placeholder="Search by company or role..."
            className="w-full p-3 pr-10 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            value={searchInput}
            onChange={(e) => {
              const value = e.target.value;
              setSearchInput(value);

              // Auto reset if input is empty
              if (value.trim() === "") {
                setSearch("");
              }
            }}
          />

          {/* Search Icon */}
          <FaSearch
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>

      {/* Scrollable Job List */}
      <div className="w-full max-w-6xl h-125 mb-5 bg-gray-50 rounded-xl overflow-y-auto px-2 shadow-sm">
        {FilteredJobs.length > 0 ? (
          FilteredJobs.map((job) => <Jobcard key={job.id} job={job} />)
        ) : (
          <p className="text-center m-10 text-gray-500">
            {jobsData.length === 0
              ? "No jobs added yet."
              : "No matching jobs found."}
          </p>
        )}
      </div>
    </div>
  );
}
