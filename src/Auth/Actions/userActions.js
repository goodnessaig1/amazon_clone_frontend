import { apiRequest } from "../../Utils/axios";
import * as types from "../Actions/constants";
import { toast } from "react-toastify";

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
                    console.log(userData.data);
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
