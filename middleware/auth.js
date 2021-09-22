export default function () {
  if (!window.localStorage.getItem('isLogged') || !window.location == '/login') {
    window.location = '/login'
  }
  else {
  	return
  }
}