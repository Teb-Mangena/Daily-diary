import { useState } from "react";
import { useDiaryContext } from "../hooks/useDiaryContext";
import { useAuthContext } from "../hooks/useAuthContext";
import '../styles/forms/DiaryForm.css';

const DiaryForm = () => {
  const [title,setTitle] = useState('');
  const [snippet,setSnippet] = useState('');
  const [body,setBody] = useState('');
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(null);
  const [isLoading,setIsLoading] = useState(false);

  const {dispatch} = useDiaryContext();
  const {user} = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if(!user){
      setError('You must be logged in');
      return
    }

    const response = await fetch('/api/diary',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Bearer ${user.token}`
      },
      body: JSON.stringify({title,snippet,body})
    });

    const data = await response.json();

    if(!response.ok){
      setError(data.error);
      setSuccess(false);
      setIsLoading(false);
    } else {
      setError(false);
      setTitle('');
      setSnippet('');
      setBody('');
      setIsLoading(false);
      setSuccess(data.message);
      dispatch({type:'CREATE_DIARY',payload:data});
    }
  }

  return ( 
    <form className="diary-form" onSubmit={handleSubmit}>
      <h2 className="diary-form-name">
        Create your diary
      </h2>

      <label>Diary's Title:</label>
      <input 
        type="text" 
        placeholder="enter a title"
        required
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
      />
      <label>Diary's snippet</label>
      <input 
        type="text" 
        placeholder="enter a title"
        required
        onChange={(e)=>setSnippet(e.target.value)}
        value={snippet}
      />
      <label>Diary's body:</label>
      <textarea 
        type='text'
        placeholder="add a describtion"
        required
        onChange={(e)=>setBody(e.target.value)}
        value={body}
      />

      <button className="create-diary" disabled={isLoading}>Create Diary</button>
      {error && <div className="err-mssg">{error}</div>}
      {success && <div className="succ-mssg">{success}</div>}
    </form>
   );
}
 
export default DiaryForm;