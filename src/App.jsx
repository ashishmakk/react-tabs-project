import "./index.css";
import data from "./data";
import { useState } from "react";
import JobInfo from "./JobInfo";

function App() {
  const [jobs, setJobs] = useState(data);
  const [jobIndex, setJobIndex] = useState(0);

  const toggleJobs = (index) => {
    setJobIndex(index);
    return;
  };

  return (
    <main>
      <JobInfo jobs={jobs} toggleJobs={toggleJobs} jobIndex={jobIndex} />
    </main>
  );
}

export default App;
