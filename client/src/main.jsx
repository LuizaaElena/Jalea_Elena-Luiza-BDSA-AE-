import { Fragment } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Fragment>
    <App />
    <ToastContainer />
  </Fragment>,
)