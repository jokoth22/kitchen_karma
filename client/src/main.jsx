import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// router paths
import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import Meals from './pages/meals/Meals.jsx';
import Signup from './pages/signup.jsx';
import Login from './pages/login.jsx';

// creates a router - component loads based on path
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />
      }, 
      {
        path: '/meals',
        element: <Meals />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // router is used in place of app component
  <RouterProvider router={router} />
)