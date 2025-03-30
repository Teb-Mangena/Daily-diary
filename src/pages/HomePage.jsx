import { useEffect, useState } from "react";
import Diaries from "../components/Diaries";

const HomePage = () => {
  const [diaries,setDiaries] = useState(null);
  const [error,setError] = useState(false);

  useEffect(()=>{
    const fetchDiaries = async () => {
      const response = await fetch('/api/diary');

      const data = await response.json();

      if(!response.ok){
        setError(data.error);
      }

      setDiaries(data);
    }

    fetchDiaries();
  },[])

  return ( 
    <div className="HomePage">
      <h1>My Diaries - username</h1>

      <div className="personal-diary">
        {diaries && diaries.map((diary)=>(
          <Diaries diary={diary} key={diary._id} />
        ))}
      </div>
      {error && <div className="err-mssg">{error}</div>}
    </div>
   );
}
 
export default HomePage;