import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// router paths
import App from './App.jsx'
import Home from './pages/home/Home.jsx';
// import MealsComponent from './pages/meals/Meals.jsx';
import Meals from './pages/meals/zackMeals.jsx';
import Signup from './pages/signup/signup.jsx';
import LoginPage from './pages/login/login.jsx';

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
        path: '/',
        element: <Home />
      },
      {
        path: '/meals',
        // element: <MealsComponent />
        element: <Meals />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/loginpage',
        element: <LoginPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // router is used in place of app component
  <RouterProvider router={router} />
)