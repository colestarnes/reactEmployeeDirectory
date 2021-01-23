import './EmployeeDetail.css'

const EmployeeDetail = (props) => {
   return (
       props.employees.map(employee => {
           console.log(employee)
           return(  
             
               <div> 
           <h3>{employee.name.first} {employee.name.last} </h3> 
           <img src={employee.picture.medium}/>
          <td>
          <div className="lol">
           <p>Email: {employee.email}</p> 
           <p>{employee.phone}</p>
           </div> 
           </td>
           </div>
           )
       })
   )
}

export default EmployeeDetail;