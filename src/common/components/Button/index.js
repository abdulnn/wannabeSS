import React from "react";
import'./style.css'



const getstyle = (theme,customClass)=>{
  if(customClass){
    return customClass;
}
else{
  return `${theme === "primary" ? "primary" : "secondary"}`; 
}
}


function Button({ name ,onClick, customClass,theme}) {


  return (
    
    <button className={getstyle(theme,customClass)}  onClick={onClick}>
      {name}
    </button>
  );
}
export default Button;
