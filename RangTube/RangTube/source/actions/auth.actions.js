import { fetchApi } from "../service/api";

/** 회원가입 동작을 서버와 통신 */
export const createUser = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "CREATE_USER_LOADING"
            });
            const response = await fetchApi("/user/create", "POST", payload, 200);

            if (response.success) {
                dispatch({
                    type: "CREATE_USER_SUCCESS"
                });
                dispatch({
                    type: "AUTH_USER_SUCCESS",
                    token: response.token
                });
                dispatch({
                    type: "GET_USER_SUCCESS",
                    payload: response.responseBody
                });

                return response;
            } else {
                throw response;
            }
        } catch (error) {
            dispatch({
                type: "CREATE_USER_FAIL",
                payload: error.responseBody
            });
            return error;

        }
    }
}

/** 로그인 동작을 서버와 통신 */
export const loginUser = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: "LOGIN_USER_LOADING"
            });
            const response = await fetchApi("/user/login", "POST", payload, 200);

            if (response.success) {
                dispatch({
                    type: "LOGIN_USER_SUCCESS"
                });
                dispatch({
                    type: "AUTH_USER_SUCCESS",
                    token: response.token
                });
                dispatch({
                    type: "GET_USER_SUCCESS",
                    payload: response.responseBody
                });
                return response;
            } else {
                throw response;
            }
        } catch (error) {
            dispatch({
                type: "LOGIN_USER_FAIL",
                payload: error.responseBody
            });
            return error;
        }
    }
}

/** 로그아웃 동작을 서버와 통신 */
export const logoutUser = () => {
    return async (dispatch, getState) => {
        const state = getState();
        try {
            const { authReducer: { authData: { token } } } = state;
            //console.log(token);
            const response = await fetchApi("/user/logout", "DELETE", null, 200, token);

            console.log(response);

            dispatch({
                type: "USER_LOGGED_OUT_SUCCESS"
            });

        } catch (e) {
            console.log(e);
        }
    }
}