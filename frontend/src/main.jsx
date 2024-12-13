import { Toaster } from './components/ui/toaster.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AuthLayout from './components/auth/layout.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <AuthLayout/>

  <Toaster/></Provider>
  </BrowserRouter>
  
)
