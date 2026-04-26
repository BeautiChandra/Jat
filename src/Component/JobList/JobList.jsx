// import { useState } from "react";
// import Jobcard from "../Jobcard/Jobcard";
// import { FaSearch } from "react-icons/fa";
// import useForm from "../../Context/UseForm";
// export default function JobList() {
//   const { jobs } = useForm();
//   // const [displayJob, setDisplayJob] = useState(jobs);

//   const [search, setSearch] = useState("");
//   // const getItems = () => {
//   //   jobs.filter((job) => {
//   //     job.company?.toLowerCase().includes(search.toLowerCase());
//   //     job.role?.toLowerCase().includes(search.toLowerCase());
//   //     job.status?.toLowerCase().includes(search.toLowerCase());
//   //     job.date?.toLowerCase().includes(search.toLowerCase());
//   //   });
//   // };

//   return (
//     <div className="w-full  mt-8 flex items-center flex-col gap-4">
//       <div className="w-[70%] flex justify-between items-center p-4 rounded-md shadow">
//         <div className=" flex gap-3">
//           <select className="p-2 px-4  shadow rounded bg-gray-400">
//             <option> All Status</option>

//             <option>Applied</option>
//             <option>Shortlisted</option>
//             <option>Interview</option>
//             <option>Rejected</option>
//             <option>Selected</option>
//           </select>
//           <select className="p-2 px-4 shadow rounded bg-gray-400">
//             <option>Sort by Date</option>
//             <option>Newest First</option>
//             <option>Oldest First</option>
//           </select>
//         </div>
//         <div className="relative w-64 bg-white">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full p-2 pr-10 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
//         </div>
//       </div>
//       <div className="w-[70%] h-full mb-5 bg-gray-50 rounded-md ">
//         {/* <p className="text-center mt-10">No Jobs Yet</p> */}
//         <Jobcard />
//       </div>
//     </div>
//   );
// }
