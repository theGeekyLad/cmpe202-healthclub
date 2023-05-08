import { createBrowserRouter } from "react-router-dom";

import Home from 'pages/Home/Home';
import Profile from 'pages/Profile/Profile';
import Admin from 'pages/Admin/Admin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;