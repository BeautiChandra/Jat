// import UserContextProvider from "../Context/UserContextProvider";
import Navbar from "../Component/Header/Navbar";
import JobForm from "../Component/JobForm/JobForm";
import JobList from "../Component/JobList/JobList";
// import { FormProvider } from "../Context/FormContext";
export default function DashBoard() {
  return (
    <>
      <Navbar />
      <JobForm />
      <JobList />
    </>
  );
}
