import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
export default function Auth() {

    const [mode, setMode] = useState("signup");
    const [error,seterror]=useState(null);
    const { signUp, user, logout ,login} = useContext(AuthContext);
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function onSubmit(data) {
    //     const result = await signUp(data.email, data.password);
    //     if (result && result.success) {
    //         alert("ثبت نام موفق! وارد شدید.");
    //     } else if (result && result.error) {
    //         alert(result.error);
    //     }
    seterror(null);
     let result;
     if (mode=="signup"){
        result=signUp(data.email,data.password);
     }else{
        result=login(data.email,data.password);
        
     }
  
     if (result.success){
        navigate('/');
        return;
     } else {
        seterror(result.error);
        return;
     }
        
     }

    return (
        <div className="page">
            <div className="container">
                <div className="auth-container">
                    {user && <span> user is login {user.email}</span>}
                    <button type="button" onClick={() => logout()}>logout</button>
                    <h1 className="page-title">{mode == "signup" ? "Sign Up" : "Login"}</h1>
                    
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                          {error && <div className="error-message">{error}</div>}
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input 
                                className="form-input" 
                                type="email" 
                                id='email' 
                                {...register('email', { required: "email is required" })} 
                                placeholder="example@gmail.com"
                            />
                            {errors.email && (<span className="form-error">{errors.email.message}</span>)}
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input 
                                className="form-input" 
                                type="password" 
                                id="password" 
                                placeholder="..." 
                                {...register('password', {
                                    required: 'password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'password must be at least 6 characters',
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: 'password must be less than 12 characters'
                                    }
                                })}
                            />
                            {errors.password && (<span className="form-error">{errors.password.message}</span>)}
                        </div>

                        <button type="submit" className="btn btn-primary btn-large">
                            {mode == 'signup' ? 'Sign Up' : 'Login'}
                        </button>
                    </form>

                    <div className="auth-Switch">
                        {mode == "signup" ? (
                            <p>Already have an account?{" "}
                                <span className="auth-link" onClick={() => setMode('login')}>Login</span>
                            </p>
                        ) : (
                            <p>Don't have an account?{" "}
                                <span className="auth-link" onClick={() => setMode('signup')}>Signup</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}