import React, { useState, useEffect } from "react"; 
import ReactDOM from "react-dom"; 
import axios from "axios"; 
import EmployeeDetail from "./EmployeeDetail";

function App() {
 const [employees, setEmployees] = useState([]);
 const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  axios
  .get("https://randomuser.me/api/?results=200&nat=us")
  .then(res => { 
    console.log(res.data);
    setEmployees(res.data);
    setLoading(false);
  }).catch(err => {
    console.log(err);
  });
}, []); 

if(loading) {
  return <p>Loading employees...</p>
}

return ( 

  
  <div className="App"> 
  <h1>Employee List</h1> 
  {employees.map((employee, uuid) => (
    <EmployeeDetail key={uuid} {...employee} />
  ))}
  </div>
);
}


export default App;
