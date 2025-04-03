import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/buttons/EditUserbtn.css';

const EditUserbtn = ({ id }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showEditFields, setShowEditFields] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false); // State for fetching data
  const navigate = useNavigate();

  const update = { name,lastName };

  // Fetch existing data when edits-div is shown
  useEffect(() => {
    if (showEditFields) {
      setIsFetchingData(true);

      fetch(`http://localhost:5050/api/user/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setName(data.name || "");
            setLastName(data.lastName || "");
          }
          setIsFetchingData(false);
        })
        .catch((err) => {
          setError("Failed to fetch data. Please try again.");
          setIsFetchingData(false);
        });
    }
  }, [showEditFields, id]);

  const handleEdit = async () => {
    setIsLoading(true);

    const response = await fetch(`/api/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data?.error || "An unexpected error occurred");
      setIsLoading(false);
      setSuccess(false);
    } else {
      setName(data?.name || name);
      setLastName(data?.name || lastName);
      setError(false);
      setIsLoading(false);
      setSuccess(data?.message || "Successfully updated!");

      setTimeout(() => {
        setShowEditFields(false);
        navigate(`/user-management`);
      }, 700);
    }
  };

  return (
    <>
      {/* Button to show edit fields */}
      <button
        className="edit"
        onClick={() => setShowEditFields(true)} // Show the edit fields
        disabled={isLoading}
      >
        Edit
      </button>

      {/* Conditional rendering of edits-div */}
      {showEditFields && (
        <div className="edits-div">
          {isFetchingData ? (
            <div className="loading">Loading data...</div>
          ) : (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Edit title"
              />
              <textarea
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Edit body"
              />

              <button
                className="AdminChanges"
                onClick={handleEdit}
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            </>
          )}
        </div>
      )}

      {error && <div className="err-mssg">{error}</div>}
      {success && <div className="succ-mssg">{success}</div>}
    </>
  );
};

export default EditUserbtn;
