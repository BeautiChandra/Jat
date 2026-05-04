import Navbar from "../Component/Header/Navbar";
import JobForm from "../Component/JobForm/JobForm";
import JobList from "../Component/JobList/JobList";
import Profile from "../Component/Profile/Profile";
export default function DashBoard() {
  return (
    <>
      <Navbar />
      <JobForm />
      <JobList />
    </>
  );
}
