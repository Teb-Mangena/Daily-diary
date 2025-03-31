import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const {logout} = useLogout();
  const {user} = useAuthContext();

  const handleLogOut = () => {
    logout();
  }

  return ( 
    <nav>
      <div className="left-section">
        <h1>
          <Link to="/">
            Daily Diary
          </Link>
        </h1>
      </div>

      <div className="right-section">
        {user && (
          <div className="userDetails">
            <span className="username">{user.name} </span>  
            <span className="lastName">{user.lastName}</span>
          </div>
        )}
        <ul className="nav-links">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/admin-dashboard'>admin dashboard</Link></li>
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/login'>login</Link></li>
          <li><Link to='/signup'>signup</Link></li>
        </ul>

        <button className="btn-logout" onClick={handleLogOut}>
        Logout
      </button>

      </div>
    </nav>
   );
}
 
export default Navbar;