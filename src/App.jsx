import NavbarOption1 from "./components/NavbarOption1"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import History from "./components/pages/History"
import OurTeam from "./components/pages/OurTeam"
import OurMethod from "./components/pages/OurMethod"
import Sustainability from "./components/pages/Sustainability"
import Contact from "./components/pages/Contact"
import Footer from "./components/Footer"
// Import the ApplicationForm component
import ApplicationForm from "./components/pages/ApplicationForm"

import "./App.css"

function App() {
  return (
    <>
      <Router>
        <NavbarOption1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-method" element={<OurMethod />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/application" element={<ApplicationForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App


// import NavbarOption1 from "./components/NavbarOption1"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Home from "./components/pages/Home"
// import About from "./components/pages/About"
// import History from "./components/pages/History"
// import OurTeam from "./components/pages/OurTeam"
// import OurMethod from "./components/pages/OurMethod"
// import Sustainability from "./components/pages/Sustainability"
// import Contact from "./components/pages/Contact"
// import Footer from "./components/Footer"
// import ApplicationForm from "./components/pages/ApplicationForm"

// import "./App.css"

// function App() {
//   return (
//     <>
//       <Router>
//         <NavbarOption1 />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/history" element={<History />} />
//           <Route path="/our-team" element={<OurTeam />} />
//           <Route path="/our-method" element={<OurMethod />} />
//           <Route path="/sustainability" element={<Sustainability />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/application" element={<ApplicationForm />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   )
// }

// export default App
