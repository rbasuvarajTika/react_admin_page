import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './components/Login';
import ForgotPassword from './pages/ForgotPassword';

import AdminPage from './pages/AdminPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword/>,
    },
    {
      path: "/adminpage",
      element: <AdminPage/>,
    },
    
  
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;