import * as types from "../Actions/constants";

const initialState = {
    SignInUser: {
        requesting: false,
        error: null,
        success: false,
    },
};

//eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        //            SIGN IN
        case types.USER_SIGN_IN_REQUEST:
            return Object.assign({}, state, {
                SignInUser: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });
        case types.USER_SIGN_IN_SUCCESS:
            return Object.assign({}, state, {
                SignInUser: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                users: action.payload,
            });
        case types.USER_SIGN_IN_FAILURE:
            return Object.assign({}, state, {
                SignInUser: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });

        default:
            return state;
    }
}
