import React, {useState} from "react";
import './index.css'
function App() {
  const [count,setCount] = useState(0);
const increment=() =>{
setCount(count+1)
}
const decrement=() =>{
  setCount(count-1)
}
  return (
    <div className="h-1/2 mx-auto flex flex-col justify-between items-center my-20  ">
<p className="text-blue-400 font-bold  text-center text-4xl"> COUNTER APP USING FUNCTIONAL COMPONENT</p>
<div className="mx-auto flex items-center justify-between px-30  my-20 w-1/2 ">   
<button className="bg-blue-500 text-3xl text-white py-2 px-4 rounded-md " onClick={increment} >Click me to increase</button>
<p className="text-4xl">{count}</p>
<button className="bg-blue-500 text-white text-3xl py-2 px-4  rounded-md" onClick={decrement} >Click me to decrease</button>

</div>
<button onClick={()=>{
  setCount(0)
}} className="bg-blue-500 text-3xl text-white py-2 px-4  rounded-md">Reset value </button>
    </div>
  )
}

export default App;
