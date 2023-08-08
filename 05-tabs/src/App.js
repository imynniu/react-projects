import "./App.css";
import { useState } from "react";
import BaseContainer from "./components/container/baseContainer";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import { useEffect } from "react";

import JobInfo from "./JobInfo";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
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
      <JobInfo jobs={jobs}></JobInfo>
    </BaseContainer>
  );
}

export default App;
