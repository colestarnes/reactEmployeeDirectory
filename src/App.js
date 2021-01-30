import React, { useState, useEffect, SearchBox } from "react";
import axios from "axios";
import EmployeeDetail from "./EmployeeDetail";
import './App.css'
function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [searchInput, setSearchInput] = useState('');
  
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
     <div className="center">
      <h1>Employee List</h1>
      <input /> 
      
      <EmployeeDetail employees={employees} />
      </div>
    </div>
  );
}
export default App;