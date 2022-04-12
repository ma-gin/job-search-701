import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home/Home"
import Job from "./views/Company/Job"
import NotFound from "./views/NotFound/NotFound"
import Navigation from "./components/Navigation"
import { Container } from "@material-ui/core"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <Container>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/company/:id" element={<Job />} />
          <Route path="/favorites" element={<Job />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  )
}

export default App
