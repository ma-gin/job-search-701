import React, { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      // const response = await axios.get(process.env.REACT_APP_JOBS_URL) //Strive API
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      )
      setLoading(false)
      setJobs(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <div>Remote Job Finder</div>
      <input type="text" />
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
        <li key={item.id}>
          <h5>{item.title}</h5>
          <a href={item.url}>{item.body}</a>
        </li>
      ))}
    </ul>
  )
}
