import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
<<<<<<< Updated upstream
=======
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Signup from './pages/signup.jsx';
import Login from './pages/login.jsx';
>>>>>>> Stashed changes
import './index.css'

// router paths
import App from './App.jsx'
import Home from './pages/home/Home.jsx';
import Meals from './pages/meals/Meals.jsx';

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
<<<<<<< Updated upstream
      {
        path: '/meals',
        element: <Meals />
      }
=======
      // example "home" do this for rest of routes to other jsx pages , comment out when running
      // {
      //   path: '/home',
      //   element: <Home />
      // },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      }
      // {
      //   path: '/',
      //   element: < />
      // },
>>>>>>> Stashed changes
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // router is used in place of app component
  <RouterProvider router={router} />
)