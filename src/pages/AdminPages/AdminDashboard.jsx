import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const AdminDashboard = () => {
  const {user} = useAuthContext();
  return ( 
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="grid-adminDashboard">
        <nav className="admin-navbar">
          <ul className="adm-dashboard">
            <li><Link to='/user-management'>User Management</Link></li>
            <li>Reports</li>
          </ul>
        </nav>

        <div className="news">
          <div className="welcome">
          <h3>Welcome! Admin {user.lastName} {user.name}</h3>
          </div>
          <div className="notices">
            <p>Admin's todo</p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default AdminDashboard;