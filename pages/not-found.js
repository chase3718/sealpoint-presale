export default function NotFound() {
	return {
		redirect: {
			destination: '/news',
			permanent: false,
		},
	};
}
