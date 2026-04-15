import { useState } from "react";
import useForm from "../../Context/UseForm";
import { MoreVertical } from "lucide-react";

export default function JobCard() {
  const { jobs, setJobs } = useForm();
  const [openMenu, setOpenMenu] = useState(null);

  const handleDelete = (i) => {
    const updatedJobs = jobs.filter((_, index) => index !== i);
    setJobs(updatedJobs);
    setOpenMenu(null); // ✅ close menu
  };

  return (
    <div className="w-full mt-10 px-4">
      {jobs.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-4 m-4  border-b-gray-400 flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-semibold">{item.company}</h2>

            {/* ROLE */}
            <p
              className={`text-sm px-3 py-1 rounded-md inline-block mt-2 ${
                item.role.toLowerCase() === "frontend"
                  ? "bg-green-600 text-white"
                  : item.role.toLowerCase() === "backend"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {item.role}
            </p>

            {/* STATUS */}
            <span className="text-sm ml-2 bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
              {item.status}
            </span>
          </div>

          <div className="flex items-center gap-4 relative">
            <p className="text-gray-500">{item.date}</p>

            <button
              onClick={() => setOpenMenu(openMenu === index ? null : index)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <MoreVertical size={20} />
            </button>

            {/* MENU */}
            {openMenu === index && (
              <div className="absolute right-0 top-8 w-28 rounded-lg bg-white shadow-lg border z-10">
                <button className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm rounded-t-lg">
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(index)} // ✅ FIX
                  className="w-full text-left px-3 py-2 hover:bg-red-100 text-sm text-red-500 rounded-b-lg"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
