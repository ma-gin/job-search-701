import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home/Home"
import Job from "./views/Company/Job"
import NotFound from "./views/NotFound/NotFound"
import Navigation from "./components/Navigation"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/company/:id" element={<Job />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
