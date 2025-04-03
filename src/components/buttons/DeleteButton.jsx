import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import '../../styles/buttons/DeleteButton.css'

const DeleteButton = ({id}) => {
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {user} = useAuthContext();

  const handleDelete = async () => {
    setIsLoading(true);

    if(!user){
      return 
    }

    const response = await fetch(`https://daily-diary-2-1ebf2ddc2803.herokuapp.com/api/diary/${id}`,{
      method:'DELETE',
      headers: {
        'Authorization':`Bearer ${user.token}`
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
        navigate('/');
      },450);
    }
  }

  return ( 
    <>
      <button className="delete" onClick={handleDelete} disabled={isLoading}>Delete</button>
      {error && <div className="err-mssg">{error}</div>}
      {success && <div className="succ-mssg">{success}</div>}
    </>
   );
}
 
export default DeleteButton;