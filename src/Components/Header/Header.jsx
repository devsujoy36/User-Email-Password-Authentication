import { Link, NavLink } from "react-router-dom"


const Header = () => {

  return (
    <div className="bg-base-200">
      <div className="navbar max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/login"}>Login</NavLink></li>
              <li><NavLink to={"/register"}>Register</NavLink></li>
              <li><NavLink to={"/forgottenPass"}>Forgot Pass</ NavLink></li>
              <li><NavLink to={"/heroregister"}>Hero Register</NavLink></li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">Email Authentication</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/login"}>Login</NavLink></li>
            <li><NavLink to={"/register"}>Register</NavLink></li>
            <li><NavLink to={"/forgottenPass"}>Forgot Pass</ NavLink></li>
            <li><NavLink to={"/heroregister"}>Hero Register</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header