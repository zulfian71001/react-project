import LayoutAuth from "../components/layouts/LayoutAuth";
import Cover from "../assets/coverAdmin.jpg";
import { useState } from "react";

const Login = () => {
    const [formUser, setFormUser] = useState({
        username: "",
        password: "",
      })
      const [errors, setErrors] = useState({
        username: "",
        password: "",
      })
      const handleChange = (event)=>{
    const {name, value} = event.target
    setFormUser((previousState)=>({...previousState, [name]:value}))
      }
    
      const simpleValidation = () =>{
        let errors = {username:"", password:""}
        let isValid = true
    if(!formUser.username){
      errors.username = "username harus diisi"
      isValid = false
    } 
    if(!formUser.password){
      errors.password = "password harus diisi"
      isValid = false
    }
    setErrors(errors)
    return isValid
      }
    
      const handleSubmit = (event) =>{
        event.preventDefault()
    if(simpleValidation()){
      console.log(formUser)
    }else{
      console.log("login gagal")
    }
      }
    
  return (
    <div className="w-full min-h-screen flex justify-center items-center overflow-x-hidden">
    <LayoutAuth image={Cover} name={"Login"} nameLink={"Register"} link={"#"} title={"belum punya akun ?"}>
    <form className="space-y-4 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          className="p-2 outline-none border border-slate-400 rounded-md focus:border-none focus:ring-2 focus:ring-cyan-400" onChange={handleChange}
        />
                  {
          errors.username && <p className="text-red-500">{errors.username}</p>
        }
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          className="p-2 outline-none border border-slate-400 rounded-md focus:border-none focus:ring-2 focus:ring-cyan-400"
          onChange={handleChange}
        />
        {
          errors.password && <p className="text-red-500">{errors.password}</p>
        }
      </div>
      <button type="submit" className="w-full rounded-md p-2 font-semibold bg-cyan-600 text-white">
        Login
      </button>
    </form>
    </LayoutAuth>
  </div>
  )
}

export default Login
