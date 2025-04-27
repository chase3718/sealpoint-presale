export default function Custom404() {
	return {
		redirect: {
			destination: '/news',
			permanent: false,
		},
	};
}
