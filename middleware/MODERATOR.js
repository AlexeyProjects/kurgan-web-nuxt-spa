export default function () {
	let user = JSON.parse(window.localStorage.getItem('user'))
	if (!user) {
		window.location = `/login`
	}
	if ( user.role != 'MODERATOR' ) {
		let lowUppercase = user.role
		window.location = `/${lowUppercase}`
	}
}