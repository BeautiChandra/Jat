import Navbar from "../Component/Header/Navbar";
import JobForm from "../Component/JobForm/JobForm";
import JobList from "../Component/JobList/JobList";
import Profile from "../Component/Profile/Profile";
import JobCount from "../Component/JobCount/JobCount";
import { useState } from "react";
// import Jobstats from "../Component/JobCount/JobCount";
export default function DashBoard() {
  const [profileView, setProfileView] = useState(false);

  return (
    <>
      <Navbar profileView={profileView} setProfileView={setProfileView} />

      <div className="w-full min-h-screen flex">
        <div className="flex-1 flex flex-col ">
          <JobCount />
          <JobForm />
          <JobList />
        </div>

        {profileView && <Profile setShowProfile={setProfileView} />}
      </div>
    </>
  );
}
