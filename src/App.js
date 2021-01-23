import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeDetail from "./EmployeeDetail";
function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api/?results=10&nat=us")
      .then(res => {
        console.log(res.data.results);
        setEmployees([...res.data.results]);
        setLoading(false);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Employee List</h1> 
      <EmployeeDetail employees={employees}/>
    </div>
  );
}
export default App;