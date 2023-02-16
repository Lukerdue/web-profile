import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home'

const browserRouter = createBrowserRouter([{
  path:"/",
  element: <Home />
}])

function App() {
  return (
    <RouterProvider router={browserRouter} />
  );
}

export default App;
