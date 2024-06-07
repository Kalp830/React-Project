import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //const [color, setColor] = useState('red')
  // const changeColor = () =>{ setColor('Blue')}


  // const [model, setModel] = useState('Roma');
  // const [year, setYear] = useState('2023');
  // const [color, setcolor] = useState('Red');
  const [car, setCar] = useState({
       brand:"Ferrari",
       model: "Roma",
       year: "2023",
       color:"Red"
  });

  const [count, setCount] = useState(0)

  const changeColor = () =>{
    setCar((car) => {
      return{
        ...car, color:"Green"
      }
    })
  }
  return (
    <>
     {/* <h1>My Favourate color is {color}!</h1>
     <button onClick={changeColor}>Blue</button> */}

     <h1>My {car.brand}</h1>
     <h2>It is {car.color} {car.model} used from {car.year}</h2>
     <button onClick={changeColor}>Click Here</button>

      <h2>Set count {count}</h2>
      <button className='btn' onClick={()=>setCount(() => count + 1)}>Increase</button>
      <button className='btn' onClick={()=>setCount(() => count - 1)}>Decrease</button>
     
       <UseEffect/>
    </>

  )
}


// Learn Use Effect Hook 

export function UseEffect(){
  const [num, setNum] = useState(0);

  useEffect(() =>{
      document.title = `Chats Count (${num})`
  });
    return(
         <>
          <h2>Let Learn useEffect1</h2>
          <h1>{num}</h1>
          <button className='btn' onClick={()=>setNum(num + 1)}>Click Me</button>
         </>
    );
}
export default App
