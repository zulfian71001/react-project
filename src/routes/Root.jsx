import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux"

const Root = () => {
 const {userInfo} = useSelector((state)=>state.auth)
  const user = userInfo.username

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar/>
     <Outlet context={{user}}/> 
    </div>
  )
}

export default Root
