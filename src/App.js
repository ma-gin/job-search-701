import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home/Home"
import Contact from "./views/Contact/Contact"
import Company from "./views/Company/Company"
import NotFound from "./views/NotFound/NotFound"
import Navigation from "./components/Navigation"

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path=":company" element={<Company />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
