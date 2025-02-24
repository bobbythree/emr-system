import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider 
} from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import AllChartsPage from './pages/AllChartsPage.jsx'
import Admission from './pages/Admission.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/all' element={<AllChartsPage />} />
      <Route path='/admission' element={<Admission />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />
}

