
import {RouterProvider } from 'react-router-dom'
import './App.css'
import { Toaster} from 'react-hot-toast'
import router from './Components/Router/Router.jsx'
function App() {
  return (
    <>
   
   
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpeg')" }}>
    <div className="p-4 h-screen flex items-center justify-center">
  
   
    <RouterProvider router={router} />

   <Toaster/>
   
    </div>
    </div>
    </>
  )
}

export default App

// {
//   fullName: 'skkkk',
//   username: 'skkkk',
//   password: 'sksksksk',
//   confirmPassword: 'sksksksk',
//   gender: 'male'
// }
// new ObjectId('66a3c02cd0bef611dae0666e')