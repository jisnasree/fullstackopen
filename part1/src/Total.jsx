const Total = (props) =>{
    return(
        <h3>Total number of exercises = {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </h3>
    )
}
export default Total;