import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { NextUIProvider } from '@nextui-org/react'
// import Header from './Components/Header.jsx'
// import ProductCard from './Components/ProductCard.jsx'
import AuthContextProvider from './Context/AuthContext.jsx'
import CartContextProvider from './Context/CartContext.jsx'


createRoot(document.getElementById('root')).render(
     <StrictMode>
     <CartContextProvider>
     <AuthContextProvider>
        <App />
     </AuthContextProvider>
     </CartContextProvider>
   </StrictMode>,
     

)
