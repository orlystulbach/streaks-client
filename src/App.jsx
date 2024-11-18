import './App.css';
import { useState } from 'react';

function AddHabit() {

  const [count, setCount] = useState(1);

  function handleClick() {
    alert('You want to add a habit!');
    setCount(count+1);
  }
  
  return (
    // Pass down handler function
    <button onClick={handleClick}> 
      Add Habit #{count}
    </button>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>
}

function App() {

  // const habits = [
  //   { title: 'Reading', id: 1 },
  //   { title: 'Learning', id: 2 },
  //   { title: 'FaceTiming Parents', id: 3 },
  // ];

  // const listItems = habits.map(habit =>
  //   <li key={habit.id}>
  //     {habit.title}
  //   </li>
  // );

  // return (
  //   // Everything must be wrapped in a single shared parent
  //   <>
  //     <img src="landscape.jpg" className="landscape" />
  //     <Greeting name="Orly"/>
  //     <h4>Keep Track of Your Habits</h4>
  //     <AddHabit />
  //     <ul>{listItems}</ul>
  //   </>
  // )
}

// Specify main component of the file
export default App
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
