import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import AdminNav from "../../components/AdminComponents/AdminNav";
import AdminEditButton from "../../components/buttons/AdminEditButton";
import AdminDeleteButton from "../../components/buttons/AdminDeleteButton";
import '../../styles/admins/ActivityDetails.css';

const ActivityDetails = () => {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [activity, setActivity] = useState(false);

  useEffect(() => {
    const fetchDiary = async () => {
      const response = await fetch(`http://localhost:5050/api/admin-activity/${id}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      }

      setActivity(data);
    };

    fetchDiary();
  }, [id]);

  return (
    <div className="admin-dashboard">
      <h2>Activity Details</h2>

      <div className="grid-adminDashboard">
        <AdminNav />

        {error && <div className="err-mssg">{error}</div>}
        <div className="news">
          {activity && (
            <div className="grid-activities">
              <div className="activity-details">
                <h3 className="activity-title">{activity.title}</h3>
                <p className="activity-description">{activity.body}</p>
              </div>
              <div className="right-section-act">
                <p>
                  Posted{" "}
                  {formatDistanceToNow(new Date(activity.createdAt), {
                    addSuffix: true,
                  })}
                </p>
                  <AdminEditButton id={id} />
                  <AdminDeleteButton id={id}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
