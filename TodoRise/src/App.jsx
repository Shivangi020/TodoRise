import { AddTask } from "./Components/AddTask"
import Header from "./Components/Header"


function App() {
 
  return (
   <main>
     <div className="header"><Header/></div>
     <div className="addTask"><AddTask/></div>
     <div></div>
   </main>
  )
}

export default App
