import Jobcard from "../Jobcard/Jobcard";
export default function JobList() {
  return (
    <div className="w-full  mt-8 flex items-center flex-col gap-4">
      <div className="w-[70%] flex justify-between items-center p-4 rounded-md shadow">
        <div className=" flex gap-3">
          <select className="p-2 px-4  shadow rounded bg-gray-400">
            <option> All Status</option>

            <option>Applied</option>
            <option>Shortlisted</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Selected</option>
          </select>
          <select className="p-2 px-4 shadow rounded bg-gray-400">
            <option>Sort by Date</option>
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search Jobs..."
          className="bg-gray-50 p-2 border-gray-400 w-50 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
      </div>
      <div className="w-[70%] h-full mb-5 bg-gray-50 rounded-md ">
        {/* <p className="text-center mt-10">No Jobs Yet</p> */}
        <Jobcard />
      </div>
    </div>
  );
}
