import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import "../../styles/forms/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="login-conta">
      <form className="login" onSubmit={handleSubmit}>
        <h2 className="login-header">Login</h2>

        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button className="btn-login" disabled={isLoading}>
          Login
        </button>
        {error && <div className="err-mssg">{error}</div>}
        <p>
          Don't have an account <Link to="/signup">signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
