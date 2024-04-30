import LayoutAuth from "../components/layouts/LayoutAuth";
import Cover from "../assets/coverAdmin.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../features/auth/authReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {userInfo} = useSelector((state)=>state.auth)
  const [formUser, setFormUser] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUser((previousState) => ({ ...previousState, [name]: value }));
  };

  const simpleValidation = () => {
    let errors = { username: "", password: "" };
    let isValid = true;
    if (!formUser.username) {
      errors.username = "username harus diisi";
      isValid = false;
    }
    if (!formUser.password) {
      errors.password = "password harus diisi";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formUser),
      });
      if (response.status == 200) {
        const data = await response.json()
        console.log("berhasil login");
        dispatch(setUserInfo(data))
        navigate('/dashboard')
      } else if (response.status == 400) {
        console.log("login gagal");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (simpleValidation()) {
      handleLogin()
    } else {
      console.log("login gagal");
    }
  };
console.log(userInfo)
  return (
    <div className="w-full min-h-screen flex justify-center items-center overflow-x-hidden">
      <LayoutAuth
        image={Cover}
        name={"Login"}
        nameLink={"Register"}
        link={"#"}
        title={"belum punya akun ?"}
      >
        <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="p-2 outline-none border border-slate-400 rounded-md focus:border-none focus:ring-2 focus:ring-cyan-400"
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              className="p-2 outline-none border border-slate-400 rounded-md focus:border-none focus:ring-2 focus:ring-cyan-400"
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-md p-2 font-semibold bg-cyan-600 text-white"
          >
            Login
          </button>
        </form>
      </LayoutAuth>
    </div>
  );
};

export default Login;
