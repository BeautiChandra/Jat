import Navbar from "../Component/Header/Navbar";
import JobForm from "../Component/JobForm/JobForm";
import JobList from "../Component/JobList/JobList";
import Profile from "../Component/Profile/Profile";
import JobCount from "../Component/JobCount/JobCount";
// import Jobstats from "../Component/JobCount/JobCount";
export default function DashBoard() {
  return (
    <>
      <Navbar />
      <JobCount />
      <JobForm />
      <JobList />
    </>
  );
}
