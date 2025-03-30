import { Link } from "react-router-dom";

const Diaries = ({ diary }) => {
  return (
    <>
      <Link to={`/diary-details/${diary._id}`}>
        <div className="diaries" key={diary._id}>
          <h3>Title: {diary.title}</h3>
          <p>{diary.snippet}</p>
        </div>
      </Link>
    </>
  );
};

export default Diaries;
