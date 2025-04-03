import { useEffect } from "react";
import Diaries from "../components/Diaries";
import { useDiaryContext } from "../hooks/useDiaryContext";
import { useAuthContext } from "../hooks/useAuthContext";
import DiaryForm from "../components/DiaryForm";

const HomePage = () => {
  const { diaries, dispatch } = useDiaryContext();
  // const [error, setError] = useState(null);

  const {user} = useAuthContext();

  useEffect(() => {
    const fetchDiaries = async () => {
      const response = await fetch("/api/diary",{
        headers: {
          'Authorization':`Bearer ${user.token}`
        }
      });

      const data = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_DIARIES', payload: data });
        // setError(data.error);
      }

    };

    if(user){
      fetchDiaries();
    }
  }, [dispatch,user]);

  return (
    <div className="grid-display-home">
      <div className="HomePage">
        <h1>{user.name}'s daily diaries</h1>
        <div className="personal-diary">
          {diaries &&
            diaries.map((diary) => (
              <Diaries diary={diary} key={diary._id} />
            ))}
        </div>
        {/* {error && <div className="err-mssg">{error}</div>}{" "} */}
        {/* Display error if exists */}
      </div>
      <div className="diary-form">
        <DiaryForm />
      </div>
    </div>
  );
};

export default HomePage;
