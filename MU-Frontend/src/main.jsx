import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
    createBrowserRouter, RouterProvider
} from 'react-router-dom'
import App from './components/App'
import Fetch from './components/Fetch'
import Home from './components/Home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/fetch",
        element: <Fetch />
    },
    {
        path: "/app",
        element: <App />
    }
])

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)