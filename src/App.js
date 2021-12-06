import React,{useState}from 'react'
import "./App.css";
import Header from "./components/Header";
// import Introduction from "./components/Introduction";
// import EmployeeDetails from "./components/EmployeeDetails";
import Footer from "./components/Footer";
import { EmployeeProvider } from "./context/EmployeeContext";
import LandingPage from "./Page/Landingpage";

function App() {

  return (
    <div className="project">
      <EmployeeProvider>
        <Header isCoutVisible={false} />
        {/* <Introduction />
        <hr className="divider"></hr>
        <EmployeeDetails />  */}
         <LandingPage />
      </EmployeeProvider>
      <Footer />
    </div>
  );
}
export default App;
