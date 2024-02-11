import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// router paths
import App from './App'
import Home from './pages/home/Home';
import Meals from './pages/meals/Meals';
import Account from './pages/account/account';

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
        element: <Meals />
      },
      {
        path: '/account',
        element: <Account />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // router is used in place of app component
  <RouterProvider router={router} />
)