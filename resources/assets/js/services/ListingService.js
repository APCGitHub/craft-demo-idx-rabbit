export default class ListingService {
	constructor() {}

	static address(listing = {}) {
		let address = `
			${listing.StreetNumberNumeric || ''} ${listing.StreetName || ''} 
			${listing.StreetSuffix || ''}
		`;

		return address;
	}
}