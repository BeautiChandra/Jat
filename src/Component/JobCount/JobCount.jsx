import { Briefcase, Users, Star, XCircle, BadgeCheck } from "lucide-react";
import { UseForm } from "../../Context/FormContext.jsx";
// import { FormContext } from "../../Context/FormContext.jsx";
export default function JobCount() {
  const { jobsData } = UseForm();
  const appliedCount = jobsData.filter(
    (job) => job.status.toLowerCase() === "applied"
  ).length;
  const interViewCount = jobsData.filter(
    (job) => job.status.toLowerCase() === "interview"
  ).length;
  const selectedCount = jobsData.filter(
    (job) => job.status.toLowerCase() === "selected"
  ).length;
  const rejectedCount = jobsData.filter(
    (job) => job.status.toLowerCase() === "rejected"
  ).length;

  return (
    // <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 ">
    <div className="w-full px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-6">
      <div className="bg-yellow-50 text-center rounded-2xl shadow-md p-4 flex gap-4 items-center">
        <div className="w-15 h-15 bg-yellow-200 rounded-full flex items-center justify-center">
          <Briefcase className="text-yellow-400" size={28} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-yellow-400">{appliedCount}</h2>
          <p className="text-gray-600 font-medium">Applied</p>
        </div>
      </div>
      <div className="bg-purple-100 text-center rounded-2xl shadow-md p-4 flex gap-4 items-center">
        <div className="w-15 h-15 bg-purple-200 rounded-full flex items-center justify-center">
          <Users className="text-purple-500" size={28} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-purple-600">
            {interViewCount}
          </h2>
          <p className="text-gray-600 font-medium">Interview</p>
        </div>
      </div>
      <div className="bg-green-100 text-center rounded-2xl shadow-md p-4 flex gap-4 items-center">
        <div className="w-15 h-15 bg-green-200 rounded-full flex items-center justify-center">
          <Star className="text-green-500" size={28} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-green-600">{selectedCount}</h2>
          <p className="text-gray-600 font-medium">Selected</p>
        </div>
      </div>
      <div className="bg-red-100 text-center rounded-2xl shadow-md p-4 flex gap-4  items-center">
        <div className="w-15 h-15 bg-red-200 rounded-full flex items-center justify-center">
          <XCircle className="text-red-500 " size={28} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-red-600">{rejectedCount}</h2>
          <p className="text-gray-600 font-medium">rejected</p>
        </div>
      </div>
      <div className="bg-cyan-100 text-center rounded-2xl shadow-md p-4 flex gap-4  items-center">
        <div className="w-15 h-15 bg-cyan-200 rounded-full flex items-center justify-center">
          <BadgeCheck className="text-cyan-600 " size={28} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-cyan-600">{rejectedCount}</h2>
          <p className="text-gray-600 font-medium">ShortListed</p>
        </div>
      </div>
    </div>
  );
}
