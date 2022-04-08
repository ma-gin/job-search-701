import React, { useEffect, useState } from "react"
import axios from "axios"
import JobSearch from "../../components/JobSearch"
import "./styles.css"
import JobResults from "../../components/JobResults"

const Home = () => {
  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState("")
  const [quick, setQuick] = useState(false)

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
    console.log(e)
    e.target.value ? setSearch(e.target.value) : setSearch(e)
  }

  return (
    <>
      <header>
        <JobSearch
          jobs={jobs}
          search={search}
          category={category}
          quick={quick}
          setQuick={setQuick}
          setCategory={setCategory}
          handleSearch={handleSearch}
        />
      </header>
      <JobResults search={search} jobs={jobs} quick={quick} loading={loading} />
    </>
  )
}

export default Home
