const backend = 'http://localhost:3001';

export const getReq = async (url: string) => {
	let data: any = null;
	await fetch(`${backend}${url}`)
		.then((response) => response.json())
		.then((response) => (data = response))
		.catch((err) => {
			console.log(`error fetching from: ${url}`);
			data = [];
		});
	return data;
};
