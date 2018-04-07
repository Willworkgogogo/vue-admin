import Cookies from 'js-cookie'

const TOKEN_KEY = 'Admin-Token'

export function getToken() {
  return Cookies.get(TOKEN_KEY)
}

export function setToken(token) {
  return Cookies.set(TOKEN_KEY, token)
}

export function removeToken() {
  Cookies.remove(TOKEN_KEY)
}