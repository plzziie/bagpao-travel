import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import Auth0Lock from 'auth0-lock';
const ID_TOKEN_KEY = 'id_token';


const lock = new Auth0Lock('39OEQrij8jRT7q2s7SxGPJzxzp64ZcAx', 'plzziie.auth0.com', {
    auth: {
      redirectUrl: `${window.location.origin}`,
      responseType: 'token'
    }
  }
);

lock.on('authenticated', authResult => {
  setIdToken(authResult.idToken);
  browserHistory.push('/special');
});

export function login(option) {
  setIdToken(option);
}

export function logout() {
  clearIdToken();
  browserHistory.replace('/');
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

function setIdToken(idToken) {
  sessionStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function getIdToken() {
  return sessionStorage.getItem(ID_TOKEN_KEY);
}

function clearIdToken() {
  sessionStorage.removeItem(ID_TOKEN_KEY);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = encodedToken;
  console.log(token);
  //if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
