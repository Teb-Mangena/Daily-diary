import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import '../../styles/buttons/EditButton.css';

const EditButton = ({ id }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");
  const [showEditFields, setShowEditFields] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(false); // State for fetching data
  const navigate = useNavigate();
  const {user} = useAuthContext();
  const update = { title, snippet, body };

  // Fetch existing data when edits-div is shown
  useEffect(() => {
    if (showEditFields) {
      setIsFetchingData(true);

      if(!user){
        return 
      }

      fetch(`https://daily-diary-2-1ebf2ddc2803.herokuapp.com/api/diary/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setTitle(data.title || "");
            setSnippet(data.snippet || "");
            setBody(data.body || "");
          }
          setIsFetchingData(false);
        })
        .catch((err) => {
          setError("Failed to fetch data. Please try again.");
          setIsFetchingData(false);
        });
    }
  }, [showEditFields, id,user]);

  const handleEdit = async () => {
    setIsLoading(true);

    const response = await fetch(`/api/diary/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization':`Bearer ${user.token}`
      },
      body: JSON.stringify(update),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data?.error || "An unexpected error occurred");
      setIsLoading(false);
      setSuccess(false);
    } else {
      setTitle(data?.title || title);
      setSnippet(data?.snippet || snippet);
      setBody(data?.body || body);
      setError(false);
      setIsLoading(false);
      setSuccess(data?.message || "Successfully updated!");

      setTimeout(() => {
        setShowEditFields(false);
        navigate(`/diary-details/${id}`);
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Edit title"
              />
              <input
                type="text"
                value={snippet}
                onChange={(e) => setSnippet(e.target.value)}
                placeholder="Edit snippet"
              />
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Edit body"
              />

              <button
                className="changes"
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

export default EditButton;
