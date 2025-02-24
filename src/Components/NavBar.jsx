
export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">EMR</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href='/'>
              Home
            </a>
          </li>
          <li>
            <a href='/all'>
              All Charts
            </a>
          </li>
          <li>
            <a href='/admission'>
              Admission
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

