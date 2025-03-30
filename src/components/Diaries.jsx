import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const Diaries = ({ diary }) => {
  return (
    <>
      <Link to={`/diary-details/${diary._id}`}>
        <div className="diaries" key={diary._id}>
          <h3>Title: {diary.title}</h3>
          <p>Snippet:{diary.snippet}</p>
          <p>Posted {formatDistanceToNow(new Date(diary.createdAt), {addSuffix:true})}</p>
        </div>
      </Link>
    </>
  );
};

export default Diaries;
