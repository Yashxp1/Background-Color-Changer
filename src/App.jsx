import { useState } from 'react'

function App() {

  const [color, setColor] = useState('black')


  return (
  
    <div className="w-full h-screen duration-200 flex flex-col" style={{backgroundColor: color}}>
     
      <div className='flex flex-row justify-center justify-evenly mt-auto ml-24 mr-24 mb-5 p-2 border-2 border-black rounded-xl bg-white'>

            <button onClick={() => {setColor("tomato")}} style={{backgroundColor: "tomato"}} className=' border-solid border-2 border-black rounded-lg  w-20 h-10'>red</button>

            <button onClick={() => {setColor("lightgreen")}} style={{backgroundColor: "lightgreen"}} className=' border-solid border-2 border-black rounded-lg  w-20 h-10'>green</button>

            <button onClick={() => {setColor("yellow")}} style={{backgroundColor: "yellow"}} className=' border-solid border-2 border-black rounded-lg  w-20 h-10'>yellow</button>

            <button onClick={() => {setColor("skyblue")}} style={{backgroundColor: "skyblue"}} className=' border-solid border-2 border-black rounded-lg  w-20 h-10'>blue</button>
            <button onClick={() => {setColor("#a8a29e")}} style={{backgroundColor: "#a8a29e"}} className=' border-solid border-2 border-black rounded-lg  w-20 h-10'>grey</button>

            <button onClick={() => {setColor("	#FFD580")}} style={{backgroundColor: "	#FFD580"}} className=' border-solid border-2 border-black rounded-lg  w-20 h-10'>orange</button>

            <button onClick={() => {setColor("#db2777")}} style={{backgroundColor: "#db2777"}} className=' border-solid border-2 border-black rounded-lg  w-20 h-10'>pink</button>

            <button onClick={() => {setColor("#8b5cf6")}} style={{backgroundColor: "#8b5cf6"}} className=' border-solid border-2 border-black rounded-lg  w-20 h-10'>burple</button>


      </div>
        
    </div>


  )
}

export default App
