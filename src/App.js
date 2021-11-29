import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import EmployeeDetails from "./components/EmployeeDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <hr className="divider"></hr>
      <EmployeeDetails />
      <Footer />
    </div>
  );
}
export default App;
