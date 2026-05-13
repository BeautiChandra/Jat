import { useState, useRef, useEffect, useContext } from "react";
import { MoreVertical } from "lucide-react";
import logo from "../../image/logo.png";
import UserContext from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const menuRef = useRef(null);

  const { user, logout } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        setShowProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky z-50 top-0">
      <nav className="w-full h-20 bg-blue-500 px-6 py-4 flex items-center justify-between shadow-lg backdrop:blue-md">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-30 w-auto" />

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Login Button */}
          {user && (
            <div className="hidden md:flex gap-3">
              <div
                className="w-10 h-10 rounded-full bg-blue-800 text-white flex justify-center items-center hover:bg-blue-900  hover:cursor-pointer hover:font-bold transition  "
                onClick={() => setShowProfile(!showProfile)}
              >
                {user.userName?.charAt(0).toUpperCase()}
              </div>

              <div
                className="bg-white text-blue-500  font-medium rounded-md px-4 py-2 hover:cursor-pointer hover:bg-amber-50"
                onClick={handleLogout}
              >
                LogOut
              </div>
            </div>
          )}

          {!user && (
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-blue-500 px-4 py-1.5 rounded-md font-medium hover:bg-gray-100"
            >
              LogIn
            </button>
          )}

          {/* Menu only when logged in */}
          {user && (
            <div className="relative" ref={menuRef}>
              {/* 3 Dot Button */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-white p-2 rounded-full hover:bg-blue-600"
              >
                <MoreVertical size={22} />
              </button>

              {/* Dropdown Menu */}
              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
                  {/* Profile Button */}
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setShowProfile(!showProfile);
                      setOpen(false);
                    }}
                  >
                    Profile
                  </button>

                  {/* Logout */}
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}

              {/* Profile Card */}
              {showProfile && (
                <div className="absolute right-0 top-14 z-50">
                  <Profile />
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
