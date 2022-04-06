import React, { useEffect, useState } from "react"
import axios from "axios"
import JobSearch from "../../components/JobSearch"
import "./styles.css"
import Jobs from "../../components/Jobs"

const Home = () => {
  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState("")
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
      setJobs(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleSearch = async (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <header>
        <JobSearch search={search} handleSearch={handleSearch} />
      </header>
      <Jobs search={search} jobs={jobs} loading={loading} />
    </>
  )
}

export default Home
