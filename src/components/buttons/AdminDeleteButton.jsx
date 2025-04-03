import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDeleteButton = ({id}) => {
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setIsLoading(true);

    const response = await fetch(`http://localhost:5050/api/admin-activity/${id}`,{
      method:'DELETE',
      headers: {
        'Content-Type':'application/json'
      },
    });

    const data = await response.json();

    if(!response.ok){
      setError(data.error);
      setSuccess(false);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setError(false);
      setSuccess(data.message);

      setTimeout(()=>{
        navigate('/admin-dashboard');
      },450);
    }
  }

  return ( 
    <>
      <button className="AdminDelete" onClick={handleDelete} disabled={isLoading}>Delete</button>
      {error && <div className="err-mssg">{error}</div>}
      {success && <div className="succ-mssg">{success}</div>}
    </>
   );
}
 
export default AdminDeleteButton;