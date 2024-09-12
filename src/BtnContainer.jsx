import React from "react";

const BtnContainer = ({ jobs, toggleJobs }) => {
  return (
    <div className='btn-container'>
      {jobs.map((jobObj, index) => {
        return (
          <button
            key={jobObj.id}
            type='button'
            className='btn'
            onClick={() => toggleJobs(index)}
          >
            {jobObj.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
