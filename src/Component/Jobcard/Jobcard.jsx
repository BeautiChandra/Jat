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
    setIsEditing(false); // Close edit mode after saving
  };

  return (
    <div className="w-full bg-white  p-6 mt-6  shadow-sm flex justify-between items-center hover:bg-sky-100">
      {isEditing ? (
        // EDIT MODE: Show Input Fields
        <div className="flex gap-2 grow">
          <input
            className="border p-1 rounded"
            value={editData.company}
            onChange={(e) =>
              setEditData({ ...editData, company: e.target.value })
            }
          />
          <input
            className="border p-1 rounded"
            value={editData.role}
            onChange={(e) => setEditData({ ...editData, role: e.target.value })}
          />
          <button onClick={handleUpdate} className="text-green-600 font-bold">
            Save
          </button>
        </div>
      ) : (
        // VIEW MODE: Show Text
        <div className="grow">
          <h3 className="font-bold text-lg">{job.company}</h3>
          <p className="text-gray-600">
            {job.role} - <span className="text-sm italic">{job.status}</span>
          </p>
        </div>
      )}

      <div className="relative">
        <button onClick={() => setShowMenu(!showMenu)}>
          {" "}
          <MoreVertical className=" cursor-pointer" />
        </button>

        {showMenu && (
          <div className=" absolute right-0 w-30 mr-2 bg-gray-100 p-2  flex flex-col gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className=" px-3 py-1 rounded text-sm hover:text-red-600 bg-gray-200"
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
