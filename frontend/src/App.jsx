
import {RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Components/Router/Router.jsx'
function App() {
  return (
    <>
   
   
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpeg')" }}>
    <div className="p-4 h-screen flex items-center justify-center">
  
   
    <RouterProvider router={router} />
    {/* comminting b=git bash*/}
   
    </div>
    </div>
    </>
  )
}

export default App
