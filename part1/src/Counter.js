/*import {useState} from 'react';
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
*/
import {useState} from 'react';
const Counter = () =>{
    const [clicks,setClicks] = useState({
        left: 0,
        right: 0
    });
const rightClickHandler = () =>{
    setClicks({
        left: clicks.left,
        right: clicks.right +1
    })
}
    const leftClickHandler = () =>{
        setClicks({
            left: clicks.left +1,
            right: clicks.right
        })
    }
    return(
        <div>
            <h1>{clicks.left}</h1>
            <button onClick={leftClickHandler}>Left</button>
            <h1>{clicks.right}</h1>
            <button onClick={rightClickHandler}>Right</button>
        </div>
    );

}
export default Counter;