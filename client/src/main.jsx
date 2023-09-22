import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//router
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ErrorPage from './components/ErrorPage.jsx'
import UserPage from './components/UserPage.jsx'
import HomePage from './components/HomePage.jsx'
import AddItemPage from './components/AddItemPage.jsx'
import ItemPage from './components/ItemPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />},
      {
        path: "/UserPage/:contactId",
        element: <UserPage />,
      }, 
      {
        path: "/AddItemPage",
        element: <AddItemPage />,
      },
      {
        path: "/ItemPage/:itemId",
        element: <ItemPage />,
      }, 
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
