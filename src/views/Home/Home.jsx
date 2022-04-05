import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import JobSearch from "../../components/JobSearch"

const Home = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${process.env.REACT_APP_URL}/jobs`)
      setLoading(false)
      const data = response.data.data
      setJobs(data.slice(0, 20))
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleSearch = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <div>Remote Job Finder</div>
      <JobSearch handleSearch={handleSearch} />
      <Jobs jobs={jobs} loading={loading} />
    </>
  )
}

export default Home

const Jobs = ({ jobs, loading }) => {
  if (loading) {
    return <h4>...loading</h4>
  }
  return (
    <ul>
      {jobs.map((item) => (
        <li key={item._id}>
          <Link to={`/company/${item._id}`}>
            <h5>{item.company_name}</h5>
            <div>{item.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
