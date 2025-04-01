import { useEffect, useState } from "react";
import AdminNav from "../../components/AdminComponents/AdminNav";
import { useAuthContext } from "../../hooks/useAuthContext";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [error,setError] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [activities,setActivities] = useState(null);

  const {user} = useAuthContext();

  useEffect(()=>{
    const fetchActivity = async () => {
      setIsLoading(true);

      const response = await fetch('/api/admin-activity');

      const data = await response.json();

      if (!response.ok){
        setError(data.error);
        setIsLoading(false);
      } else {
        setError(false);
        setIsLoading(false);
        setActivities(data);
      }
    }

    fetchActivity();
  },[]);


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
            {error && <div className="err-mssg">{error}</div>}
            {isLoading ? (
              <div className="loading-circle"></div>
            ) : (
              <div className="activity-notes">
                {activities && activities.map((activity)=>(
                  <div className="admin-activity-type" key={activity._id}>
                    <Link to={`/activity-details/${activity._id}`}>
                      <h3 className="activity-title">{activity.title}</h3>
                      <p className="description">{activity.body}</p>
                      <p className="acivity-added">posted {formatDistanceToNow(new Date(activity.createdAt), {addSuffix: true,})}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default AdminDashboard;