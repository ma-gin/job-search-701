import React, { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetchData()
  }, [jobs])

  const fetchData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_JOBS_URL)
      setJobs(response.data.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <div>Remote Job Finder</div>
      <input type="text" />
      <ul>
        {jobs.map((item) => (
          <li key={item._id}>
            <h5>{item.company_name}</h5>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home

// jobs.filter(job => job.category === category).map((job) => (
//            <SingleJob key={job._id} job={job}/>))}
