export default function({ route, from, store, redirect }) {
	let user = JSON.parse(window.localStorage.getItem('user'))
	if (!user) {
		window.location = `/login`
	}
	else if ( user.role != 'ADMINISTRATOR' ) {
		redirect({ path: `/login` })
		let lowUppercase = user.role
		window.location = `/${lowUppercase}`
	}
}