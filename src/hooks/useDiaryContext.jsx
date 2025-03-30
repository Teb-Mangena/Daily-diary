import { useContext } from "react";
import { DiaryContext } from "../context/DiaryContext";

export const useDiaryContext = () => {
  const context = useContext(DiaryContext);

  if (!context || typeof context !== "object") {
    throw new Error("useDiaryContext must be used within a DiaryContextProvider and provide a valid value");
  }

  return context;
};