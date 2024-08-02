import React from 'react';
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom';

function Login (){
  const navigate=useNavigate()
  const {register,handleSubmit ,formState: {errors} }=useForm() 

 return(
    <div className='back-image'>
            <h1>Welcome To Our Website</h1>
        <div className='login-form'>
   
        <form onSubmit={handleSubmit(()=>{navigate("/crud")})}>
          <h3>Login to Your Account</h3>
          <p>Enter your username & password to login</p>
          <lable>Email address</lable><br/>
          <input {...register('email',{required:"Email is required"})} type="text" placeholder="Enter Your Mail id" name='email'/>
          {errors.email && <span>{errors.email.message}</span>}<br/>
          <lable>We'll never share your email with anyone else.</lable><br/><br/>
          <lable>Password</lable><br/>
          <input {...register('psw',{required:"Password is required",minLength:{value:8,message:"Length should be 8"}})} name='psw' type="password" placeholder="Enter Your password"/>
          {errors.psw && <span>{errors.psw.message}</span>}<br/><br/>
          <button type="submit">Login</button>

        </form>
      
         
        </div>
     </div>
    
   );
}
export default Login;