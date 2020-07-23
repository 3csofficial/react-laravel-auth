import axios from 'axios';
import History from '../history.js';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_USERS
} from './types';
import config from '../config';

const ROOT_URL = config.apiEndpoint;

export const signinUser = ({ email, password }) => {
    return (dispatch) => {

        axios.post(`${ROOT_URL}/authenticate`, { email, password })
            .then(response => {
                const data = response.data.data;
                if(data.error){
                    dispatch(authError(data.error));
                }else{
                    dispatch({ type: AUTH_USER });
                    localStorage.setItem('token', data.access_token);
                    History.push('/users');
                }

            }).catch((res) => {
                dispatch(authError('Sorry email & password was not correct'));
            });
    };
};

export const signupUser = ({ name, email, password }) => {
    return (dispatch) => {

        axios.post(`${ROOT_URL}/register`, { name, email, password })
            .then(response => {
                const data = response.data.data;
                if(data.error){
                    dispatch(authError(data.error));
                }else{
                    dispatch({ type: AUTH_USER });
                    localStorage.setItem('token', data.token);
                    History.push('/users');
                }
            })
            .catch(err => {
                dispatch(authError(err.response.data.error));
            });
    };
};

export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export const signoutUser = () => {
    localStorage.removeItem('token')
    return { type: UNAUTH_USER };
};

export const fetchUsers = () => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/user`, {
            headers: { authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then(response =>{
            dispatch({
                type: FETCH_USERS,
                payload: response.data.data
             });
        });
    };
};
