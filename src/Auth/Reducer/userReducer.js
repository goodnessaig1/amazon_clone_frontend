import * as types from "../Actions/constants";

const initialState = {
    SignUp: {
        requesting: false,
        error: null,
        success: false,
    },
    SignInUser: {
        requesting: false,
        error: null,
        success: false,
    },
    getUserAuth: {
        requesting: false,
        error: null,
        success: false,
    },
};

//eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        //            SIGN UP
        case types.USER_SIGN_UP_REQUEST:
            return Object.assign({}, state, {
                SignUp: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });
        case types.USER_SIGN_UP_SUCCESS:
            return Object.assign({}, state, {
                SignUp: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                users: action.payload,
            });
        case types.USER_SIGN_UP_FAILURE:
            return Object.assign({}, state, {
                SignUp: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });
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

        case types.GET_USER_DETAILS_REQUEST:
            return Object.assign({}, state, {
                getUserAuth: {
                    requesting: true,
                    error: null,
                    success: false,
                },
            });
        case types.GET_USER_DETAILS_SUCCESS:
            return Object.assign({}, state, {
                getUserAuth: {
                    requesting: false,
                    error: null,
                    success: true,
                },
                userData: action.payload,
            });

        case types.GET_USER_DETAILS_FAILURE:
            return Object.assign({}, state, {
                getUserAuth: {
                    requesting: false,
                    error: action.payload,
                    success: false,
                },
            });

        default:
            return state;
    }
}
