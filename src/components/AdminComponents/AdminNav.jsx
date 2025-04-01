import { Link } from "react-router-dom";

const AdminNav = () => {
  return ( 
    <nav className="admin-navbar">
      <ul className="adm-dashboard">
        <li><Link to='/user-management'>User Management</Link></li>
        <li><Link to='/report'>Reports</Link></li>
        <li><Link to='/activity'>Set Activity</Link></li>
      </ul>
    </nav>
   );
}
 
export default AdminNav;