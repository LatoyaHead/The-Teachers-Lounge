export const authenticated = (setIsAuth) => { //authenticating whether or not the user is logged in by checking token saved on localstorage
  const token = localStorage.getItem('token')
  if(token) {
    setIsAuth(true)
    return true
  }
  setIsAuth(false)
  return false
}