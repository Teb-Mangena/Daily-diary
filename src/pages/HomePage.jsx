import { useEffect, useState } from "react";
import Diaries from "../components/Diaries";
import { useDiaryContext } from "../hooks/useDiaryContext";
import DiaryForm from "../components/DiaryForm";

const HomePage = () => {
  const { diaries, dispatch } = useDiaryContext();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiaries = async () => {
      const response = await fetch("/api/diary");
        const data = await response.json();

        if (!response.ok) {
          setError(data.error);
        }

        dispatch({ type: "SET_DIARIES", payload: data });
    };

    fetchDiaries();
  }, [dispatch]);

  return (
    <div className="grid-display-home">
      <div className="HomePage">
        <h1>My Diaries - username</h1>
        <div className="personal-diary">
          {diaries &&
            diaries.map((diary) => <Diaries diary={diary} key={diary._id} />)}
        </div>
        {error && <div className="err-mssg">{error}</div>}{" "}
        {/* Display error if exists */}
      </div>
      <div className="diary-form">
        <DiaryForm />
      </div>
    </div>
  );
};

export default HomePage;
