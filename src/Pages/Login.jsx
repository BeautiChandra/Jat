import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { userName, email };
    login(userData);
    navigate("/dashboard");
  };

  const handleShowhide = () => {
    setshowPassword((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-[30%] bg-white p-6 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>

        {/* Username */}
        <label htmlFor="userName" className="block mb-1 font-medium">
          User Name
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Enter User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
          required
        />

        {/* Email */}
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
          required
        />

        {/* Password */}
        <label htmlFor="password" className="block mb-1 font-medium">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 mb-2 w-full rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue focus:border-blue-500"
          required
        />

        {/* Show Password */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showPassword"
            onChange={handleShowhide}
            className="mr-2"
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 w-full rounded-md 
                     hover:bg-blue-500 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
