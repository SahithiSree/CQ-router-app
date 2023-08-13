import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
export const initState = {
  isError: false,
  isLoading: false,
  isAuth: false,
};
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: true,
      };
    default:
      return state;
  }
};
export default reducer;
