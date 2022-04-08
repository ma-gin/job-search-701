import { Card, CardContent, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import { EmptyStar } from "./Icons"

const JobResults = ({ search, jobs, quick, loading }) => {
  if (quick) {
    if (search.length > 1) {
      if (loading) {
        return <h4 className="loader">...loading</h4>
      }
      return (
        <ul>
          {jobs
            .filter((item) => {
              return (
                item.company_name
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.category.toLowerCase().includes(search.toLowerCase())
              )
            })
            .map((item) => {
              return (
                <Card key={item._id} className="card">
                  <Link to={`/company/${item._id}`}>
                    <CardContent className="job-card">
                      <div className="card-header">
                        <Link to={`/company/${item.company_name}`}>
                          <h5 className="no-link">{item.company_name}</h5>
                        </Link>
                        <div className="no-link">{item.title}</div>
                      </div>
                      <Button className="star">
                        <EmptyStar />
                      </Button>
                    </CardContent>
                  </Link>
                </Card>
              )
            })}
        </ul>
      )
    }
  }
  return null
}

export default JobResults
