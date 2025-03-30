import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";

const DiaryDetails = () => {
  const {id} = useParams();
  const [diary,setDiary] = useState(null);
  const [error,setError] = useState(false);

  useEffect(()=>{
    const fetchDiary = async () => {
    const response = await fetch(`/api/diary/${id}`);
    const data = await response.json();

    if(!response.ok){
      setError(data.error);
    }

    setDiary(data);
    }

    fetchDiary();
  },[id]);


  return ( 
      <div className="single-diary">
        {diary && (
          <>
            <div className="left-section">
              <h2 className="single-title">{diary.title}</h2>
              <p className="single-snippet">{diary.snippet}</p>
              <p className="single-body">
                {diary.body}
              </p>
            </div>
            <div className="right-section">
              <p>Posted {formatDistanceToNow(new Date(diary.createdAt), {addSuffix:true})}</p>
              <EditButton id={diary._id} />
              <DeleteButton id={diary._id} />
              <Link to='/'><p>Go Back</p></Link>
            </div>
          </>
        )}
        {error && <div className="err-mssg">{error}</div>}
      </div>
   );
}
 
export default DiaryDetails;