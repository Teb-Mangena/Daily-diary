import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import AdminNav from "../../components/AdminComponents/AdminNav";
import EditUserbtn from "../../components/buttons/EditUserbtn";
import DeleteUserbtn from "../../components/buttons/DeleteUserbtn";

const UserManagement = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [getUsers, setGetUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      const response = await fetch("/api/user");
      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError(false);
        setGetUsers(data);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>User Management</h2>

      <div className="grid-adminDashboard">
        <AdminNav />

        <div className="news">
          <h2>User Management</h2>
          {error && <div className="err-mssg">{error}</div>}
          {isLoading ? (
            <div className="loading-circle"></div>
          ) : (
            <div className="all-users-info">
              {getUsers &&
                getUsers.map((getUser) => (
                  <div className="flex-user-list" key={getUser._id}>
                    <p className="name">Name: {getUser.name}</p>
                    <p className="last-name">Last Namee: {getUser.lastName}</p>
                    <p className="user-emails">Email: {getUser.email}</p>
                    <p className="user-role">Role: {getUser.role}</p>
                    <p className="joined-when">
                      Joined{" "}
                      {formatDistanceToNow(new Date(getUser.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                    <div className="action-buttons">
                      <EditUserbtn id={getUser._id} />
                      <DeleteUserbtn id={getUser._id} />
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
