import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './pages/Home.jsx';
import './index.css'

// routes go here, reference Stripe activity 23

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
      // example "home" do this for rest of routes to other jsx pages , comment out when running
      {
        path: '/home',
        element: <Home />
      },
      // {
      //   path: '/',
      //   element: < />
      // },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // router is used in place of app component
  <RouterProvider router={router} />
)