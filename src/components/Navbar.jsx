import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {  useAuth } from "../context/AuthContext";
 

export default function Navbar(){
    const {user,login,logout}=useAuth();

    return <nav  className="navbar">

    <div  className="navbar-container"> 
       <Link  to='/' className="nav-brand" >ShopHum</Link>
       <div  className="navbar-links">
             <Link to="/" className="nav-bar-link" >Home</Link>
             <Link to="/checkout"  className="nav-bar-link">Cart</Link> 
       </div>
       <div  className="navbar-auth">
        {  !user ?
        (<div className="navbar-auth-links">

           
           <Link to="/auth" className="btn btn-primary">Login</Link>
            <Link  to="/auth" className="btn btn secondary">Signup</Link>
            
            </div>)
             :(<div><span>Hello {user.email}</span>
                <button className="btn btn-primary" onClick={logout}>Logout</button></div>
             )

       }
       </div>
      


    </div>

    </nav>
}

