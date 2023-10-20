import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'

export default function SignUp() {
  
  //1. handle for getting data from inputs 
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

//3. handle errors 
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

//4. navigate
const navigate = useNavigate();

//2. handle after submitting

const handleSubmit = async (e) => {
  e.preventDefault();
  //loading starts as soon as we click on the submit button
try{
  setLoading(true);
  //sending data by stringifying 

  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),}
    );  
    // after result again to json
    const data = await res.json();
    console.log(data);

    if (data.success === false) {
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
      // setError(null);
      navigate('/sign-in');
    
}catch(error){
  setLoading(false);
  setError(error.message);
}

  
};

  return (
  <div className='p-3 max-w-lg mx-auto'>
  <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>

  <form 
  onSubmit={handleSubmit} 
  className='flex flex-col gap-4'>
  <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

<button 
disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
         {loading ? "loading..." : "Sign Up"} 
         signup karo na
  </button>
  </form>



  <div className='flex gap-2 mt-5'>
  <p>Have an account?</p>

  <Link to={'/sign-in'}>
  <span className='text-blue-700'>Sign in</span>
  </Link>

  </div>
  {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
