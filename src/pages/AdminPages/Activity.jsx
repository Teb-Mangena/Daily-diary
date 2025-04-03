import { useState } from "react";
import AdminNav from "../../components/AdminComponents/AdminNav";
import '../../styles/admins/Activity.css';

const Activity = () => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [success,setSuccess] = useState(false);
  const [error,setError] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const activity = {title,body};

  const handleSubmit = async () => {
    setIsLoading(true);

    const response = await fetch('http://localhost:5050/api/admin-activity',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(activity)
    });

    const data = await response.json();

    if(!response.ok){
      setError(data.error);
      setIsLoading(false);
      setSuccess(false);
    } else {
      setError(false);
      setIsLoading(false);
      setSuccess(data.message);
      setBody('');
      setTitle('');
    }
  }

  return (
    <div className="admin-dashboard">
      <h2>Add Activity</h2>

      <div className="grid-adminDashboard">
        <AdminNav />

        <div className="news">
          <form className="admin-activity" onSubmit={handleSubmit}>
            <label>Activity Name:</label>
            <input 
              type="text" 
              placeholder="Enter the activity name" 
              onChange={(e)=>setTitle(e.target.value)}
              value={title}
            />

            <label>Activity Describtion:</label>
            <textarea 
              type="text" 
              placeholder="add a describtion" 
              onChange={(e)=>setBody(e.target.value)}
              value={body}
            />

            <button className="btn-add-activity" disabled={isLoading}>Add Activity</button>
            {error && <div className="err-mssg">{error}</div>}
            {success && <div className="succ-mssg">{success}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Activity;
