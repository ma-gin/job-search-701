import React, { useState, useEffect } from "react"
import axios from "axios"

const JobSearch = ({ handleSearch }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/jobs/categories`
    )
    setCategories(response.data)
  }
  return (
    <div className="search">
      <input type="text" onChange={(e) => handleSearch(e)} />
      <select name="category" id="category">
        {categories &&
          categories.map((item, index) => {
            return (
              <option key={index} value="item">
                {item}
              </option>
            )
          })}
      </select>
    </div>
  )
}

export default JobSearch
