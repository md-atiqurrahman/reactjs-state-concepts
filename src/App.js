import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUser></LoadUser>
      {/* <Counter></Counter> */}
    </div>
  );
}
function LoadUser(){
  const [users,setUsers] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
        <h1>Export users</h1>
        <p>{users.length}</p>
        {
          users.map(user => <User name={user.name} email={user.email}></User>)
        }
    </div>
  )
}

function User(props){
  return (
    <div style={{border:'2px solid lightpink',margin: '10px'}}>
      <h1>Name: {props.name}</h1>
      <p>Email: {props.email}</p>
    </div>
  )
}
// function Counter(){
//   const [count,setCount] = useState(50);
//   const increaseCount = () => setCount(count + 1);
//   const decreaseCount = () => setCount(count - 1);

//   // const increaseCount = () =>{
//   //   const newCount = count + 1;
//   //   setCount(newCount);
//   // }
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

export default App;
