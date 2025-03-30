import { useContext } from "react";
import { DiaryContext } from "../context/DiaryContext";

export const useDiaryContext = () => {
  const context = useContext(DiaryContext);

  if (!context) {
    throw new Error("useWorkoutContext must be used within a WorkoutContextProvider");
  }

  return context;
}