import { useState } from "react";
import { UseForm } from "../../Context/FormContext.jsx";
import { MoreVertical } from "lucide-react";

export default function JobCard({ job }) {
  const { deleteJob, editJob } = UseForm();

  // Local state to handle the "Edit Mode" UI
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...job });
  const [showMenu, setShowMenu] = useState(false);

  const handleUpdate = () => {
    editJob(editData);
    setIsEditing((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="relative w-full bg-white p-6 mt-6 shadow-sm flex justify-between items-center hover:bg-sky-100">
      {isEditing ? (
        <div className="flex gap-2 grow">
          <input
            className="border p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            value={editData.company}
            onChange={(e) =>
              setEditData({ ...editData, company: e.target.value })
            }
          />
          <input
            className="border p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
            value={editData.role}
            onChange={(e) => setEditData({ ...editData, role: e.target.value })}
          />
          <button onClick={handleUpdate} className="text-green-600 font-bold">
            Save
          </button>
        </div>
      ) : (
        <div className="grow mr-4">
          <h3 className="font-bold text-lg">{job.company}</h3>
          <div className="flex justify-between mt-1">
            <div className="flex items-center gap-3">
              <p className="text-gray-600">{job.role}</p>
              <span
                className={`px-2 py-1 rounded-full text-sm font-medium
               ${
                 job.status === "Applied"
                   ? "bg-yellow-100 text-yellow-700"
                   : job.status === "Interview"
                   ? "bg-purple-100 text-purple-700"
                   : job.status === "Rejected"
                   ? "bg-red-300 text-red-700"
                   : job.status === "Selected"
                   ? "bg-blue-100 text-blue-600"
                   : "bg-green-100 text-green-700"
               }`}
              >
                {job.status}
              </span>
            </div>
            <p className="text-sm text-gray-500">{job.date}</p>
          </div>
        </div>
      )}

      <div className="absolute top-4 right-4">
        <button onClick={() => setShowMenu(!showMenu)}>
          <MoreVertical className="cursor-pointer" />
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-2 top-8 z-10 w-28 bg-gray-100 p-2 rounded shadow-md flex flex-col gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-3 py-1 rounded text-sm hover:text-red-600 bg-gray-200"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>

            <button
              onClick={() => deleteJob(job.id)}
              className="px-3 py-1 rounded text-sm hover:text-red-600 bg-gray-200"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
