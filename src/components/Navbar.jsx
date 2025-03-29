import { Link } from "react-router-dom";

const Navbar = () => {
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
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/admin-dashboard'>admin dashboard</Link></li>
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/login'>login</Link></li>
          <li><Link to='/signup'>signup</Link></li>
        </ul>
      </div>
    </nav>
   );
}
 
export default Navbar;