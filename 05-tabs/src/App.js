import "./App.css";
import { useState } from "react";
import BaseContainer from "./components/container/baseContainer";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import { useEffect } from "react";
import BtnConatinner from "./BtnContainer";

import JobInfo from "./JobInfo";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const handleClick = (id) => {
    setActiveId(id);
  };
  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
    setCompany([...new Set(jobs.map((job) => job.company))]);
    setActiveId(jobs[0].company);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <BaseContainer>
        <LoadingSpinner />
      </BaseContainer>
    );
  }
  return (
    <BaseContainer>
      <BtnConatinner
        company={company}
        handleClick={handleClick}
        activeId={activeId}
      ></BtnConatinner>
      <JobInfo jobs={jobs} activeId={activeId}></JobInfo>
    </BaseContainer>
  );
}

export default App;
