import React from "react"
import { useParams } from "react-router-dom"

const Company = (props) => {
  const { id } = useParams()
  return (
    <div className="company-details">
      <h2>Company Details - {id}</h2>
    </div>
  )
}

export default Company
