export default class ListingService {
	constructor() {}

	static address(listing = {}) {
		let address = `
			${listing.StreetNumberNumeric || ''} ${listing.StreetName || ''} 
			${listing.StreetSuffix || ''}
		`;

		return address;
	}

	static fullAddress(listing = {}, config = {}) {
		let address = ListingService.address(listing);

		if(config && config.separated)
			address += `<br>`;

		if(listing.City)
			address += `${listing.City}, `;

		address += `${listing.StateOrProvince} ${listing.PostalCode}`;

		return address;
	}
}