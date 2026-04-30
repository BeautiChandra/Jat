import { useState, useContext } from "react";
import { FormContext } from "./FormContext.js";

export default function FormContextProvider({ children }) {
  const [jobsData, setJobsData] = useState([]);

  const addJob = (jobData) => {
    const { company, role, date, status } = jobData;
    if (!company || !role || !date || !status) return;
    const newJob = {
      id: Date.now(),
      company,
      role,
      date,
      status,
    };
    setJobsData([...jobsData, newJob]);
  };

  const deleteJob = (id) => {
    let updatedJobs = jobsData.filter((job) => job.id !== id);
    setJobsData(updatedJobs);
  };

  const editJob = (updatedJob) => {
    setJobsData((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  return (
    <FormContext.Provider value={{ jobsData, addJob, deleteJob, editJob }}>
      {children}
    </FormContext.Provider>
  );
}

export const UseForm = () => useContext(FormContext);
