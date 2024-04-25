import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Root = () => {
  const user = "zulfian" 
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar/>
     <Outlet context={{user}}/> 
    </div>
  )
}

export default Root
