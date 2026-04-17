import { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [editIndex, setEditIndex] = useState(null);
  const [jobs, setJobs] = useState(() => {
    const data = localStorage.getItem("jobs");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <FormContext.Provider value={{ jobs, setJobs, editIndex, setEditIndex }}>
      {children}
    </FormContext.Provider>
  );
}
