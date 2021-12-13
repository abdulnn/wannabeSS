import Softsuavelogo from "./subcomponent/Softsuavelogo";
import Employeecount from "./subcomponent/EmployeeCount";
import "./style.css";
import { useLocation } from "react-router";
const Header = () => {
  const curPath = useLocation().pathname;
  const isEmpEnrollPage = (curPath == "/employee_enroll");

  return (
    <div className="header">
      <Softsuavelogo />
      {isEmpEnrollPage && <Employeecount />}
    </div>
  );
};

export default Header;
