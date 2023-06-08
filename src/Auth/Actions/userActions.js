import { apiRequest } from "../../Utils/axios";
import * as types from "../Actions/constants";
import { toast } from "react-toastify";

const signUPRequest = (request) => {
    return {
        type: types.USER_SIGN_UP_REQUEST,
        payload: request,
    };
};

const signUPSuccess = (success) => {
    return {
        type: types.USER_SIGN_UP_SUCCESS,
        payload: success,
    };
};

const signUPFailure = (failure) => {
    return {
        type: types.USER_SIGN_UP_FAILURE,
        payload: failure,
    };
};

const signInRequest = (request) => {
    return {
        type: types.USER_SIGN_IN_REQUEST,
        payload: request,
    };
};

const signInSuccess = (success) => {
    return {
        type: types.USER_SIGN_IN_SUCCESS,
        payload: success,
    };
};

const signInFailure = (failure) => {
    return {
        type: types.USER_SIGN_IN_FAILURE,
        payload: failure,
    };
};

export const userDetailsSuccess = (request) => {
    return {
        type: types.GET_USER_DETAILS_SUCCESS,
        payload: request,
    };
};
export const userDetailsRequest = (request) => {
    return {
        type: types.GET_USER_DETAILS_REQUEST,
        payload: request,
    };
};

export const getUserDetailsFailure = (error) => {
    return {
        type: types.GET_USER_DETAILS_FAILURE,
        payload: error,
    };
};

export function SignUp(credentials, history, setFieldError, setSubmitting) {
    return (dispatch) => {
        const promise = apiRequest("POST", `api/users/sign_up`, credentials);
        dispatch(signUPRequest());
        promise.then(
            function (payload) {
                const { data } = payload;

                if (data.status === "Failed") {
                    const { message } = data;
                    if (message.includes("mobileOrEmail")) {
                        setFieldError("mobileOrEmail", message);
                        dispatch(signUPFailure(message));
                    }
                    if (message.includes("password")) {
                        setFieldError("password", message);
                        dispatch(signUPFailure(message));
                    }
                } else if (data.status === "success") {
                    const userData = data;
                    console.log(userData.data);
                    const token = userData.data.token;
                    localStorage.setItem("token", token);
                    dispatch(signUPSuccess(data));
                    history.push("/sign_up_success");
                }
                setSubmitting(false);
            },
            function (error) {
                const errorMsg = error;
                toast.error("An error occured, please try again", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                dispatch(signUPFailure(errorMsg));
            }
        );
        return promise;
    };
}

export function SignInUser(credentials, history) {
    return (dispatch) => {
        const promise = apiRequest("POST", `api/users/sign_in`, credentials);
        dispatch(signInRequest());
        promise.then(
            function (payload) {
                const { data } = payload;
                if (data.status === "Failed") {
                    const { message } = data;
                    toast.error(message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    dispatch(signInFailure(message));
                } else if (data.status === "success") {
                    const userData = data;
                    const token = userData.data.token;
                    localStorage.setItem("token", token);
                    dispatch(signInSuccess(data));
                    history.push("/");
                }
            },
            function (error) {
                const errorMsg = error;
                toast.error("An error occured", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                dispatch(signInFailure(errorMsg));
            }
        );
        return promise;
    };
}

export function getUserAuth() {
    return (dispatch) => {
        const promise = apiRequest("GET", `api/users/user_auth`);
        dispatch(userDetailsRequest());
        promise.then(
            function (payload) {
                const userData = payload.data;
                dispatch(userDetailsSuccess(userData));
            },
            function (error) {
                const errorMsg = error;
                dispatch(getUserDetailsFailure(errorMsg));
            }
        );
        return promise;
    };
}
