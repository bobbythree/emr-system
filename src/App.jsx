import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import MainLayout from './layouts/MainLayout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />
}

