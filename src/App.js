import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import EmployeeEnroll from "./Page2/EmployeeEnroll";
import Footer from "./components/Footer";
import { EmployeeProvider } from "./context/EmployeeContext";
import LandingPage from "./Page/Landingpage";
import Error from './DefaultPage/Error'

function App() {
  return (
    <Router>
      <EmployeeProvider>
        <div className="project">
          <Header />
          <Routes>
            <Route
              path="/employee_enroll"
              exact
              element={<EmployeeEnroll />}
            />
            <Route path="/" exact element={<LandingPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </EmployeeProvider>
    </Router>
  );
}
export default App;
//
