import { createBrowserRouter } from "react-router-dom";

import Appbar from '../components/Appbar/Appbar';
import Home from 'pages/Home/Home';
import Profile from 'pages/Profile/Profile';
import Admin from 'pages/Admin/Admin';

const pages = [
  {
    title: 'Home',
    link: '/home',
  },
  {
    title: 'Profile',
    link: '/profile',
  },
  {
    title: 'Admin',
    link: '/admin',
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Appbar pages={pages} />,
    children: [
      {
        path: "/home",
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
    ]
  },
]);

export default router;