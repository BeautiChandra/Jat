import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import { Camera, Pencil, LogOut, Lock } from "lucide-react";

export default function Profile() {
  const { user, login, logout } = useContext(UserContext);

  const [editProfile, setEditProfile] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  // const fileInputRef = useRef(null);

  const [profileData, setProfileData] = useState({
    ...user,
    userName: user.userName || "",
    email: user.email || "",
    password: user.password || "",
    photo: user.photo || "",
  });

  if (!user) return null;

  // Save Name + Email
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
    <div className="w-96 bg-white rounded-2xl shadow-lg p-6 mx-auto mt-10">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="relative">
          {profileData.photo ? (
            <img
              src={profileData.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-blue-500 text-white flex items-center justify-center text-4xl font-bold">
              {user.userName?.charAt(0).toUpperCase()}
            </div>
          )}

          <button className="absolute bottom-1 right-1 bg-blue-500 p-2 rounded-full text-white">
            <Camera size={18} />
          </button>
        </div>

        <h1 className="text-2xl font-bold mt-4">{user.userName}</h1>

        <p className="text-gray-500">{user.email}</p>
      </div>

      {/* Divider */}
      <div className="border-t my-6"></div>

      {/* Edit Profile Button */}
      <button
        onClick={() => {
          setEditProfile(!editProfile);
          setEditPassword(false);
        }}
        className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100"
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
            className="w-full border p-2 rounded"
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
            className="w-full border p-2 rounded"
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
            className="w-full border p-2 rounded"
          />

          <button
            onClick={handleProfileSave}
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
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
        className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 mt-3"
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
            className="w-full border p-2 rounded"
          />

          <button
            onClick={handlePasswordSave}
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            Save Password
          </button>
        </div>
      )}

      {/* Logout */}
      <button
        onClick={logout}
        className="w-full flex justify-center items-center gap-2 mt-6 text-red-500 border border-red-500 py-3 rounded-lg hover:bg-red-50"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}
