import { useAuthContext } from "./useAuthContext";
import { useDiaryContext } from "./useDiaryContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch:dairyDispatch } = useDiaryContext();
  const logout = () => {
    // remove users from localstorage
    localStorage.removeItem('user');

    // update auth context
    dispatch({type:'LOGOUT'});
    dairyDispatch({type:'SET_DIARIES',payload:null})
  }

  return {logout}
}