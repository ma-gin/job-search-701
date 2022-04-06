import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import JobSearch from "../../components/JobSearch"
import "./styles.css"

const Home = () => {
  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [itemsPerPage, setItemsPerPage] = useState(10)

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

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
    console.log(search)
    setJobs(
      jobs.filter((item) => {
        return item.title.includes(search) || item.company_name.includes(search)
      })
    )
  }
  return (
    <>
      <div className="title">Remote Job Finder</div>
      <JobSearch search={search} handleSearch={handleSearch} />
      <Jobs search={search} jobs={jobs} loading={loading} />
    </>
  )
}

export default Home

const Jobs = ({ search, jobs, loading }) => {
  if (search) {
    if (loading) {
      return <h4>...loading</h4>
    }
    return (
      <ul>
        {jobs.map((item) => {
          return (
            <li key={item._id}>
              <Link to={`/company/${item._id}`}>
                <h5>{item.company_name}</h5>
                <div>{item.title}</div>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
  return null
}
