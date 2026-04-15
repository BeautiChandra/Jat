import { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [jobs, setJobs] = useState(() => {
    const data = localStorage.getItem("jobs");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <FormContext.Provider value={{ jobs, setJobs }}>
      {children}
    </FormContext.Provider>
  );
}
