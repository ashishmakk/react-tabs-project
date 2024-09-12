import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import BtnContainer from "./BtnContainer";

const JobInfo = ({ jobs, toggleJobs, jobIndex }) => {
  const { id, company, title, dates, duties } = jobs[jobIndex];

  return (
    <section>
     <BtnContainer jobs={jobs} toggleJobs={toggleJobs} />
      <div className='content-container'>
        <h2>{title}</h2>
        <span className='company-tag'>{company}</span>
        <p className='dates'>{dates}</p>
        {duties.map((item, index) => {
          return (
            <div key={index} className='job-desc'>
              <IoMdArrowDropright className='job-icon' />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default JobInfo;
