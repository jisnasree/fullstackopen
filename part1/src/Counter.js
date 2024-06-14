import {useState} from 'react';
const Counter =() =>{

    const [counter,setCounter] = useState(0);
    const Display = (props) =>{
        return(
            <div>
                {props.counter}
            </div>
        )
    }
    const IncreaseCounter = () =>{
        setCounter(counter+1);
    }
    const decreaseCounter =() =>{
        setCounter(counter-1);
    }

    return (
        <div>
            <Display counter={counter}/>
            <button onClick={IncreaseCounter} text="plus"/>
            <button onClick={decreaseCounter} text="minus"/>
        </div>
    )
}
export default Counter;