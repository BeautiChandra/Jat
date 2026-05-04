// import UserContextProvider from "../Context/UserContextProvider";
import Navbar from "../Component/Header/Navbar";
import JobForm from "../Component/JobForm/JobForm";
import JobList from "../Component/JobList/JobList";
// import { FormProvider } from "../Context/FormContext";
import Profile from "../Component/Profile/Profile";
export default function DashBoard() {
  return (
    <>
      <Navbar />
      <JobForm />
      <JobList />
      {/* <div className="flex justify-center p-8 overflow-hidden">
        <div className="w-[70%]">
          <JobForm />
          <JobList />
        </div>

        <Profile />
      </div> */}
    </>
  );
}
