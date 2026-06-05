import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import { Pencil, LogOut, Lock } from "lucide-react";

export default function Profile({ setShowProfile }) {
  const { user, login, logout } = useContext(UserContext);

  const [editProfile, setEditProfile] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const [profileData, setProfileData] = useState({
    ...user,
    userName: user.userName || "",
    email: user.email || "",
    password: user.password || "",
    photo: user.photo || "",
  });

  if (!user) return null;

  // Save Profile
  const handleProfileSave = () => {
    const updatedProfile = {
      ...user,
      userName: profileData.userName,
      email: profileData.email,
      photo: profileData.photo,
    };

    login(updatedProfile);
    setEditProfile(false);
  };

  // Save Password
  const handlePasswordSave = () => {
    const updatedPassword = {
      ...user,
      password: profileData.password,
    };

    login(updatedPassword);
    setEditPassword(false);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-5 sm:p-6 mx-auto mt-0 lg:mt-10 relative h-full lg:h-auto overflow-y-auto">
      {/* Cross Button */}
      <button
        onClick={() => setShowProfile((prev) => !prev)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
      >
        ✕
      </button>

      {/* Profile Image */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          {profileData.photo ? (
            <img
              src={profileData.photo}
              alt="Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-500"
            />
          ) : (
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl sm:text-4xl font-bold">
              {user.userName?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <h1 className="text-xl sm:text-2xl font-bold mt-4">{user.userName}</h1>

        <p className="text-gray-500 text-sm sm:text-base break-all">
          {user.email}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t my-6"></div>

      {/* Edit Profile Button */}
      <button
        onClick={() => {
          setEditProfile(!editProfile);
          setEditPassword(false);
        }}
        className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition"
      >
        <Pencil size={18} />
        Edit Profile
      </button>

      {/* Edit Profile Form */}
      {editProfile && (
        <div className="mt-4 space-y-3">
          <input
            type="text"
            placeholder="Name"
            value={profileData.userName}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                userName: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={profileData.email}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                email: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Profile Photo URL"
            value={profileData.photo}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                photo: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleProfileSave}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
          >
            Save Profile
          </button>
        </div>
      )}

      {/* Password Settings */}
      <button
        onClick={() => {
          setEditPassword(!editPassword);
          setEditProfile(false);
        }}
        className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 mt-3 transition"
      >
        <Lock size={18} />
        Password Settings
      </button>

      {/* Password Form */}
      {editPassword && (
        <div className="mt-4 space-y-3">
          <input
            type="password"
            placeholder="New Password"
            value={profileData.password}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                password: e.target.value,
              })
            }
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handlePasswordSave}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
          >
            Save Password
          </button>
        </div>
      )}

      {/* Logout */}
      <button
        onClick={logout}
        className="w-full flex justify-center items-center gap-2 mt-6 text-red-500 border border-red-500 py-3 rounded-lg hover:bg-red-50 transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}
