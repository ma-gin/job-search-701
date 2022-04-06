import React, { useState, useEffect } from "react"
import axios from "axios"
import "./styles.css"
import { Button, MenuItem, TextField } from "@material-ui/core"

const JobSearch = ({ search, handleSearch }) => {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/jobs/categories`
    )
    setCategories(response.data)
  }

  const handleChange = (e) => {
    setCategory(e.target.value)
    console.log(category)
  }
  return (
    <div className="search">
      <TextField label="Search" onChange={(e) => handleSearch(e)} />
      <TextField
        select
        label="Select Category"
        value={""}
        onChange={handleChange}
        className="select-category">
        {categories &&
          categories
            .map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              )
            })
            .reverse()}
      </TextField>
      <Button variant="contained" color="primary" className="search-btn">
        Search
      </Button>
    </div>
  )
}

export default JobSearch
