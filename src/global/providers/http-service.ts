export function httpRequest(url, method, body) {
	return fetch(url, {
		method, // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, cors, *same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, same-origin, *omit
		headers: { 'Content-Type': 'application/json' },
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: body ? JSON.stringify(body) : undefined,
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			return data;
		})
		.catch(error => console.error('Fetch Error =\n', error));
}
