import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import EmployeeDetails from "./components/EmployeeDetails";
import Footer from "./components/Footer";
import { EmployeeProvider } from "./context/EmployeeContext";
import { useState } from "react/cjs/react.development";

function App() {
  const [employeeList, setEmployeeList] = useState([])
  
  return (
    <div className="project">
      <EmployeeProvider>
        <Header empCount={employeeList.length}/>
        <Introduction />
        <hr className="divider"></hr>
        <EmployeeDetails employeeList={employeeList} setEmployeeList={setEmployeeList}/>
      </EmployeeProvider>
      <Footer />
    </div>
  );
}
export default App;
