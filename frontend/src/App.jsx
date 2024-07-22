
import './App.css'

// import Login from "./Pages/Login/Login"
import Signup from './Pages/Signup/Signup'

function App() {
  return (
    <>
   
    
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpeg')" }}>
    <div className="p-4 h-screen flex items-center justify-center">
    {/* <Login/> */}
     <Signup/>
    </div>
    </div>
    </>
  )
}

export default App
