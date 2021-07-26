// Import Library
import { useState, useEffect } from 'react';
import { TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import axios from 'axios';

// Import Styling
import './JobList.css';

export default function JobList() {
    const [jobsData, setJobsData] = useState([])
    const [jobDesc, setJobDesc] = useState('');
    const [location, setLocation] = useState('');
    const [isFullTime, setIsFullTime] = useState(false);
    const today = new Date();
    console.log(today)
    console.log(today.toISOString().slice(0, 10));

    const getJobData = async () => {
        let data = []
        const apiBaseURLDev = process.env.REACT_APP_BASE_URI_DEV;
        try{
            const res = await axios.get(`${apiBaseURLDev}/position?description=${jobDesc}&location=${location}&full_time=${isFullTime}`);
            data = await res.data;
            setJobsData(data);
        }catch(err){
            console.error(err);
        }
    }

    useEffect(() => {
        getJobData()
    }, []);

    const onSearch = () => {
        getJobData();
    }

    return (
        <div className="job-list">
            <h1>GitHub Jobs</h1>
            <form className="search-form">
                <TextField
                    label="Job Description"
                    variant="outlined"
                    value={jobDesc}
                    onChange={(e) => setJobDesc(e.target.value)}
                    required
                />
                <TextField
                    label="Location"
                    variant="outlined"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <FormControlLabel
                control={
                    <Checkbox
                        checked={isFullTime}
                        onChange={(e) => setIsFullTime(e.target.checked)}
                        name="Full Time Only"
                        color="primary"
                    />
                }
                label="Full Time Only"/>
                <Button className="btn btn-lg search-btn" onClick={onSearch}>
                    Search
                </Button> 
            </form>
            {jobsData.length>0 ? jobsData.map(el => (
                <a className="card" href={'/jobdetail/' + el.id}>
                    <div className="card-head">
                        <h2 key={el.id}>{el.title}</h2>
                        <h3>{el.location}</h3>
                    </div>
                    <p className="description" key={el.id}>{el.company} <strong>{el.type}</strong></p>
                </a>
            )) : <p>Tidak ada data yang sesuai</p>}
        </div>
    );
}
