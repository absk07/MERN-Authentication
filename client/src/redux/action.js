import axios from 'axios';
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from './constant';

export const register = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.post("http://localhost:8080/api/register",{ email, password }, config);
        if(data.success === false) {
            return dispatch({ type: USER_REGISTER_FAIL, payload: data.message });
        }
        if(data.error === true) {
            return dispatch({ type: USER_REGISTER_FAIL, payload: "Server Error!" });
        }
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        console.log(error)
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.post("http://localhost:8080/api/login", { email, password }, config);
        if(data.success === false) {
            return dispatch({ type: USER_LOGIN_FAIL, payload: data.message });
        }
        if(data.error === true) {
            return dispatch({ type: USER_LOGIN_FAIL, payload: "Server Error!" });
        }
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
};