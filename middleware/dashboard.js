export default function () {
	let user = JSON.parse(window.localStorage.getItem('user'))
	if (!user) {
		window.location = `/login`
	}
	if ( user.role != 'BUSINESS' ) {
		let lowUppercase = user.role
		redirect({ path: `/${lowUppercase}` })
		window.location = `/${lowUppercase}`
	}
	else if ( user.role != 'MODERATOR' ) {
		let lowUppercase = user.role
		window.location = `/${lowUppercase}`
	}
	else if ( user.role != 'ADMINISTRATOR' ) {
		let lowUppercase = user.role
		window.location = `/${lowUppercase}`
	}
}