import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import NotFound from './components/404';
import Projects from './components/projects';

const browserRouter = createBrowserRouter([{
  path:"/",
  element: <Home />,
  errorElement: <NotFound/>
}, {
  path:"/contact",
  element: <Contact />
},{
  path:"/projects",
  element: <Projects />
}])

function App() {
  return (
    <RouterProvider router={browserRouter} />
  );
}

export default App;
