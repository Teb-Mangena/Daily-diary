import { createContext, useReducer } from "react";

export const DiaryContext = createContext();

export const diaryReducer = (state,action) => {
  switch(action.type){
    case 'SET_DIARIES':
      return {
        diaries: action.payload
      }
    case 'CREATE_DIARY':
      return {
        ...state,
        diaries: [...state.diaries,action.payload]
      }
    case 'DELETE_DIARY':
      return {
        ...state,
        diaries: state.diaries.filter(diary => diary._id !== action.payload)
      }
      default:
        return state
  }
}

export const DiaryContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(diaryReducer,{
    diaries: null
  });

  return (
    <DiaryContext.Provider value={{...state,dispatch}}>
      {children}
    </DiaryContext.Provider>
  );
}