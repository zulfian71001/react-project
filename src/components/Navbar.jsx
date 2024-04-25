import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-slate-50 p-4 flex items-center justify-between px-10 text-lg font-semibold ">
      <Link to="/" className="text-cyan-500 hover:text-cyan-600 ">Home</Link>
      <Link to="/login" className="text-cyan-500 hover:text-cyan-600 ">Login</Link>
    </nav>
  )
}

export default Navbar
