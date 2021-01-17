
const EmployeeDetail = ({ name, picture }) => {
    return (
        <>
            <p>
                <img src={picture} alt={name} style={{ width: "50px", height: "30px" }} />
            </p>
            <p>{name}</p>
        </>
    )
}  

export default EmployeeDetail;