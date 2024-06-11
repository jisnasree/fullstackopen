import Header from './Header';
import Content from './Content';
import Total from './Total';
import './App.css';

const App = () => {
  const course = "Half Stack Application Development"

  const parts=[
  {
    name:"Fundamentals of React",
    exercises:10
  },
  
  {
    name: "Using props to pass data",
    exercises : 7
  },

  {
    name: "State of a component",
    exercises :14
  }]
  return (
    <div className="wrapper">
     <Header course={course}/>
     <Content parts={parts}/>
     <Total parts={parts}/>
    </div>
  );
}

export default App;
