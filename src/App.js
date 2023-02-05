import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='max-w-[1240px] mx-auto'>
       <RouterProvider router={router}></RouterProvider>
       <Toaster></Toaster>
    </div>
  );
}

export default App;
