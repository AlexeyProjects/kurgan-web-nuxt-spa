export default function({ route, from, store, redirect }) {
	let user = JSON.parse(window.localStorage.getItem('user'))

	if (user === null && window.location != '/login' ) {
		redirect({ path: `/login` })	
	}

	if ( user != null ) {
		let lowUppercase = user.role
		if ( user.role != 'BUSINESS' ) {
			redirect({ path: `/${lowUppercase}` })
		}
		else if ( user.role != 'MODERATOR' ) {
			redirect({ path: `/${lowUppercase}` })
		}
		else if ( user.role != 'ADMINISTRATOR' ) {
			redirect({ path: `/${lowUppercase}` })
		}
	}
}