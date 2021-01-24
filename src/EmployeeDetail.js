import './EmployeeDetail.css'

const EmployeeDetail = (props) => {
    return (
        props.employees.map(employee => {
            console.log(employee)
            return (
                <div className="container lol">
                    <div class="img-col">
                        <img src={employee.picture.large} />
                    </div>
                    <div className="text-col">
                        <h3>{employee.name.first} {employee.name.last} </h3>
                     <p>{employee.phone}</p>
                     <p>Email: {employee.email}</p>
                    </div>
                </div>
            )
        })
    )
}

export default EmployeeDetail;