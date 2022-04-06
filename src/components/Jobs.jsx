import { Card, CardContent, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import { EmptyStar } from "./Icons"

const Jobs = ({ search, jobs, loading }) => {
  if (search) {
    if (loading) {
      return <h4 className="loader">...loading</h4>
    }
    return (
      <ul>
        {jobs
          .filter((item) => {
            return (
              item.company_name.toLowerCase().includes(search.toLowerCase()) ||
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
                      <h5>{item.company_name}</h5>
                      <Button>
                        <EmptyStar />
                      </Button>
                    </div>
                    <div>{item.title}</div>
                  </CardContent>
                </Link>
              </Card>
            )
          })}
      </ul>
    )
  }
  return null
}

export default Jobs
