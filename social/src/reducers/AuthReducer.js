
export const AuthReducer = (state, {type, payload}) => {

    switch (type) {
        case 'LOGIN_USER':
            return {
                ...state,
                token: payload.token,
                user: payload.user,
            };

        case 'LOGOUT_USER':
            return {
                ...state,
                token: null,
                user: null,
            };

        default:
            return state;
           
    }
}