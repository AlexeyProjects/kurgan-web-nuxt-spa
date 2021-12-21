export default function () {
  if (!window.localStorage.getItem('isLogged') || !window.location == '/login') {
  	// if (!window.localStorage.getItem('isLogged') ) {
    redirect({ path: `/login` })	
  }
  else {
  	return
  }


}