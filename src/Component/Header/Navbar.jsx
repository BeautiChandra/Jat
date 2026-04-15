import { useState, useRef, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import logo from "../../image/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky z-50 top-0">
      <nav className="w-full h-20 bg-blue-500 px-6 flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-30 w-auto" />

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Login Button */}
          <button className="bg-white text-blue-500 px-4 py-1.5 rounded-md font-medium hover:bg-gray-100">
            Login
          </button>

          {/* 3 dots */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen(!open)}
              className="text-white p-2 rounded-full hover:bg-blue-600"
            >
              <MoreVertical size={22} />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Password Settings
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
