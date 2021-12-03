import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import EmployeeDetails from "./components/EmployeeDetails";
import Footer from "./components/Footer";
import { EmployeeProvider } from "./context/EmployeeContext";

function App() {
  
  return (
    <div className="project">
      <EmployeeProvider>
        <Header/>
        <Introduction />
        <hr className="divider"></hr>
        <EmployeeDetails />
      </EmployeeProvider>
      <Footer />
    </div>
  );
}
export default App;
