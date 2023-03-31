import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './components/Main';
import Quize from './components/Quize';
import Results from './components/Results';

// react routes
const router = createBrowserRouter([
  {
    path:'/',
    element:<><Main/></>
  },
  {
    path:'/quize',
    element:<><Quize/></>
  },
  {
    path:'/result',
    element:<><Results/></>
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
