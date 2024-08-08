import { createBrowserRouter } from 'react-router-dom'

import HomePage from '@/pages/Home/HomePage'
import AuthenticationPage from '@/pages/Authentication/AuthenticationPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/authentication',
    element: <AuthenticationPage />,
  },
])
