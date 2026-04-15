import "./App.css";
import Navbar from "./Component/Header/Navbar";
import JobForm from "./Component/JobForm/JobForm";
import JobList from "./Component/JobList/JobList";
import Jobcard from "./Component/Jobcard/Jobcard";
import { FormProvider } from "./Context/FormContext";
function App() {
  return (
    <FormProvider>
      <div className="h-full w-screen bg-gray-200">
        <Navbar />
        <JobForm />
        <JobList />
        {/* <Jobcard /> */}
      </div>
    </FormProvider>
  );
}

export default App;
