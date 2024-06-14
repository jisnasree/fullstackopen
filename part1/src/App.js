import Header from './Header';
import Content from './Content';
import Total from './Total';
import Counter from './Counter';
import './App.css';

const App = () => {
  const course = {
  name: "Half Stack Application Development",
  parts:[
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
} 
  return (
    <div className="wrapper">
     <Header course={course.name}/>
     <Content parts={course.parts}/>
     <Total parts={course.parts}/>
     <Counter />
    </div>
  );
}

export default App;
