
import './App.css'
import Home from './Pages/Home/Home'


function App() {
  return (
    <>
   
    
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpeg')" }}>
    <div className="p-4 h-screen flex items-center justify-center">
   
     <Home/>
    </div>
    </div>
    </>
  )
}

export default App
