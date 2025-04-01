import AdminNav from "../../components/AdminComponents/AdminNav";

const Activity = () => {
  return (
    <div className="admin-dashboard">
      <h2>Add Activity</h2>

      <div className="grid-adminDashboard">
        <AdminNav />

        <div className="news">
          <form className="admin-activity">
            <label>Activity Name:</label>
            <input 
              type="text" 
              placeholder="Enter the activity name" 
              
            />

            <label>Activity Describtion:</label>
            <textarea 
              type="text" 
              placeholder="add a describtion" 

            />

            <button>Add Activity</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Activity;
