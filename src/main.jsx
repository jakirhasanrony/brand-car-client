import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders'
import AllProvider from './Providers/AllProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllProvider>
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </AllProvider>
  </React.StrictMode>,
)
