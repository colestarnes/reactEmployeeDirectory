const EmployeeDetail = props => {
    return (
        <> 
        
            <p>
                <img src={props.picture.thumbnail} alt={props.name.first} style={{ width: "50px", height: "30px" }} />
            </p>
            <p>{props.name.first} {props.name.last}</p>

        </>
    )
}

export default EmployeeDetail;