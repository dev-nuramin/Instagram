
import cookie from "js-cookie";
// create Initaial State for AuthReducer
export const INITIAL_STATE = {
  token: cookie.get("token") || '',
  user: cookie.get('user') ? JSON.parse(cookie.get("user")) : '',
}
