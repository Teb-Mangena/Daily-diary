import { useState } from "react";
import { Link } from 'react-router-dom';
import { useSignup } from "../../hooks/useSignup";
import '../../styles/forms/Signup.css';

const Signup = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');

  const {signup,error,isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name,lastName,email,password);
  }

  return ( 
    <form className="login" onSubmit={handleSubmit}>
      <h2 className="login-header">Signup</h2>

      <label>Name:</label>
      <input 
        type="text"
        placeholder="Enter your email"
        onChange={(e)=>setName(e.target.value)}
        value={name} 
      />

      <label>Last Name:</label>
      <input 
        type="text"
        placeholder="Enter your email"
        onChange={(e)=>setLastName(e.target.value)}
        value={lastName} 
      />

      <label>Email:</label>
      <input 
        type="email"
        placeholder="Enter your email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email} 
      />

      <label>Password:</label>
      <input 
        type="password" 
        placeholder="Enter your password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password} 
      />

      <button className="btn-signup" disabled={isLoading}>Sign up</button>
      {error && <div className="err-mssg">{error}</div>}
      <p>Have an account? <Link to='/login'>Log in</Link></p>
    </form>
   );
}
 
export default Signup;