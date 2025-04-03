import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import '../styles/Diaries.css';

const Diaries = ({ diary }) => {
  const createdAt = diary.createdAt ? new Date(diary.createdAt) : null;

  return (
    <>
      <Link to={`/diary-details/${diary._id}`}>
        <div className="diaries" key={diary._id}>
          <h3>Title: {diary.title}</h3>
          <p>Snippet:{diary.snippet}</p>
          <p>
            Posted{" "}
            {createdAt
              ? formatDistanceToNow(createdAt, { addSuffix: true })
              : "Unknown time"}
          </p>
        </div>
      </Link>
    </>
  );
};

export default Diaries;
