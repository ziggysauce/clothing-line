import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const requestLogin = creds => ({
  type: 'LOGIN_REQUEST',
  isFetching: true,
  isAuthenticated: false,
  creds,
});

const receiveLogin = user => ({
  type: 'LOGIN_SUCCESS',
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
});

const loginError = message => ({
  type: 'LOGIN_FAILURE',
  isFetching: false,
  isAuthenticated: false,
  message,
});

const requestLogout = () => ({
  type: 'LOGOUT_REQUEST',
  isFetching: true,
  isAuthenticated: true,
});

const receiveLogout = () => ({
  type: 'LOGOUT_SUCCESS',
  isFetching: false,
  isAuthenticated: false,
});

exports.loginUser = (creds, history) => {
  console.log('This is Creds for login: ', creds);
  return (dispatch) => {
    console.log("am i even in this bitchh?")
    dispatch(requestLogin(creds));
    return axios.get(`/api/users/${creds.email}/${creds.password}`)
      .then((response) => {
        if (!response.data) {
          dispatch(loginError('Bad Request...'));
          return Promise.reject(response);
        }
        localStorage.setItem('id_token', response.data.id_token);
        localStorage.setItem('access_token', response.data.id_token);
        dispatch(receiveLogin(response.data));
        history.push('/');
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  };
};

exports.loginAdmin = (creds, history) => {
  console.log('This is Creds: ', creds);
  return (dispatch) => {
    dispatch(requestLogin(creds));
    return axios.get(`/api/users/${creds.email}/${creds.password}`)
      .then((response) => {
        if (!response.data) {
          dispatch(loginError('Bad Request...'));
          return Promise.reject(response);
        }
        localStorage.setItem('id_token', response.data.id_token);
        localStorage.setItem('access_token', response.data.id_token);
        dispatch(receiveLogin(response.data));
        history.push('/home');
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  };
};


exports.signupUser = (creds, history) => {
  const body = {
    email: creds.email,
    password: creds.password,
    userType: 0,
    fName: creds.fName,
    lName: creds.lName,
    username: creds.username,
    image: creds.image,
  };
  console.log('This is Creds for signup: ', creds);
  return (dispatch) => {
    console.log('signup REACHEDDDD')
    dispatch(requestLogin(creds));
    return axios.post('/api/users', body)
      .then((response) => {
        if (response.statusText !== 'Created') {
          dispatch(loginError('Bad Request...'));
          return Promise.reject(response);
        }
        console.log('local storage session saved!');
        localStorage.setItem('id_token', response.data.id_token);
        localStorage.setItem('access_token', response.data.id_token);
        dispatch(receiveLogin(response.data));
        history.push('/home');
      })
      .catch((err) => {
      });
  };
};


exports.logoutUser = () => (dispatch) => {
  console.log('logging out...');
  dispatch(requestLogout());
  localStorage.removeItem('id_token');
  localStorage.removeItem('access_token');
  dispatch(receiveLogout());
  console.log('logged out');
};
