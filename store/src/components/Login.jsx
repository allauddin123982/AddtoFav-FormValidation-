import React, { useState } from 'react'
import Validation from './Validation';

import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    //obj, if error occured
    const [errors, setErrors] = useState({});
    
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
    });
    
    function handleInput(event){
        const newObj = {...user, [event.target.name]:event.target.value}
        setUser(newObj);
      

    }
    function handleValidation (event) {  
        event.preventDefault();

        //stores error if occured that Validation.jsx returns
        setErrors(Validation(user));
        setUser({
            name:'',
            email:'',
            password:'',
        })
       
    }
    function handlesubmit(){
        toast.success("Successfully Register")
    }

  return (
    <>  
    <div className='max-w-[450px] mx-auto   absolute top-18 right-0 rounded-xl bg-gray-800 text-white z-10'>
        <div className="pt-5 font-bold text-3xl text-center tracking-widest font-mono ">
        Login here
        </div>
        <form action="" className='p-5' onSubmit={handleValidation}>
            <p className='font-bold text-xl '>Name</p>
            <input value={user.name} type="text" className='border w-96 p-1 text-black' name="name" onChange={handleInput} />
            {
                errors.name && <p style={{color:"red"}} >{errors.name}</p>
            }
            <p className='font-bold text-xl mt-5'>Email</p>
            <input value={user.email}type="text" className='border w-96 p-1 text-black' name="email" onChange={handleInput} />
            {
                errors.email && <p style={{color:"red"}}>{errors.email}</p>
            }
            <p className='font-bold text-xl mt-5'>Password</p>
            <input value={user.password}type="password" className='border w-96 p-1 text-black' name="password" onChange={handleInput}/>
            {
                errors.password && <p style={{color:"red"}}>{errors.password}</p>
            }
            <button className='rounded bg-blue-500 p-2 w-32 mt-5 text-xl 'onClick={handlesubmit}>Submit</button>
            <p className='text-green-500 mt-8'>Forgot Password?</p>
            <p className='text-gray-400 italic mt-8'>Lorem ipsum dolor sit amet <u className='text-blue-500'>consectetur</u> adipisicing elit. Soluta, voluptate?</p>
        </form>

    </div>

    <ToastContainer />
    
    </>
  )
}

export default Login