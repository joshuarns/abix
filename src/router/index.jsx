import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import Negocios from '@/pages/Negocios'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/negocios', element: <Negocios /> },
])
