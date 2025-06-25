
export const AuthReducer = (state, {type, payload}) => {

    switch (type) {
        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                isUserLogin: true,
                user: payload,
            };

        case 'LOGOUT_USER':
            return {
                ...state,
                isUserLogin: false,
                user: { },
            };

        default:
            return state;
           
    }
}