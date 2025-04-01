import AdminNav from "../../components/AdminComponents/AdminNav";
import { useAuthContext } from "../../hooks/useAuthContext";

const AdminDashboard = () => {
  const {user} = useAuthContext();
  return ( 
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="grid-adminDashboard">
        
        <AdminNav />

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