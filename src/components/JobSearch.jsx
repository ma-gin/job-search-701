import React, { useState, useEffect } from "react"
import axios from "axios"
import "./styles.css"
import { Button, MenuItem, TextField } from "@material-ui/core"

const JobSearch = ({
  search,
  category,
  quick,
  handleSearch,
  setQuick,
  setCategory,
}) => {
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

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)
    handleSearch(search)
  }

  const toggle = (value) => {
    return !value
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <TextField
            value={search}
            label="Search"
            onChange={(e) => handleSearch(e)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={handleChange}
            className="select-category">
            {categories &&
              categories
                .map((item, index) => {
                  return (
                    <MenuItem className="select-item" key={index} value={item}>
                      {item}
                    </MenuItem>
                  )
                })
                .reverse()}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="search-btn">
            Search
          </Button>
        </div>
      </form>
    </>
  )
}

export default JobSearch
