import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl">EMR</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/all'>
              All Charts
            </Link>
          </li>
          <li>
            <Link to='/admission'>
              Admission
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

