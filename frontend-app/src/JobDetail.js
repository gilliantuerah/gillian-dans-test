import './JobDetail.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function JobDetail(props) {
  const id = props.match.params.id;
  const [jobsData, setJobsData] = useState([])

  const getJobData = async () => {
    let data = []
    const apiBaseURLDev = process.env.REACT_APP_BASE_URI_DEV;
    try{
        const res = await axios.get(`${apiBaseURLDev}/position/${id}`);
        data = await res.data;
        setJobsData(data);
    }catch(err){
        console.error(err);
    }
  }
  useEffect(() => {
    getJobData();
  }, []);

  return (
    <div className="wrapper-detail">
      <div className="header">
        <h1>{jobsData.title}</h1>
        <h3>{jobsData.company} / {jobsData.location}</h3>
      </div>
      <div className="description" dangerouslySetInnerHTML={{__html: (jobsData.description)}}/>

      <div className="bottom-section">
        <div className="apply">
          <h2>How To Apply?</h2>
          <div dangerouslySetInnerHTML={{__html: (jobsData.how_to_apply)}}/>
        </div>
        <div className="company">
          <h2>Find more about the company</h2>
          <a href={jobsData.company_url}>{jobsData.company_url}</a>
          <img src={jobsData.company_logo} alt={jobsData.company}/>
        </div>
      </div>
      
      
    </div>
  );
}

export default JobDetail;
