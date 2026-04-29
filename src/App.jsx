import { useState,useContext } from 'react'
import { Routes,Route } from 'react-router-dom' 
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth';
import Checkout from './Pages/Checkout';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthContext';
import ProductDetail from './Pages/ProductDetail';


function App() {



  return ( <div className='app'>
    <AuthProvider>

   
 <Navbar/>
<Routes>
 
<Route  path="/" element={<Home/>}/>
<Route  path="/auth"   element={<Auth/>}/>
<Route  path="/checkout"  element={<Checkout/>} />
<Route path="/products/:id" element={<ProductDetail />} />  {/* ← املای ProductDetail */}

    


     </Routes>

 </AuthProvider>
  </div>
 
  )
}

export default App
