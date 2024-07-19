import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Index  from './components/Index';
import  Home from './components/Home';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/home",
      element: <Home />
    }
  ]
);


function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
