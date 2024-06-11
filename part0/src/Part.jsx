const Part = (props) =>{
    return(
        <div className="content">
            <h2>{props.part}</h2>
            <p>{props.exercises}</p>
        </div>
    )
}
export default Part;