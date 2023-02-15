import { Navigate, useRoutes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';

// ----------------------------------------------------------------------

export default function Router({ setDarkMode, darkMode }) {
  return useRoutes([
    {
      path: '/',
      element: <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
        { path: 'projects', element: <Projects /> },
      ]
    },
    { path: '*', element: <Navigate to="/home" replace /> }
  ]);
}
