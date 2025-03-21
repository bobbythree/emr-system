import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar.jsx'

export default function MainLayout() {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

