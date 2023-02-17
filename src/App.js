import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';

const browserRouter = createBrowserRouter([{
  path:"/",
  element: <Home />
}, {
  path:"/contact",
  element: <Contact />
}])

function App() {
  return (
    <RouterProvider router={browserRouter} />
  );
}

export default App;
