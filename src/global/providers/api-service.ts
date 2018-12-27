import { httpRequest } from './http-service';

export const apiService = {

	// Calendar
	getCalendarData: async () => {
		const url = 'http://pokeapi.salestock.net/api/v2/pokemon/1';
		return httpRequest(url, 'GET', undefined);
	},
};
