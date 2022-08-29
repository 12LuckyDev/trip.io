export interface TripStatic {
	title: string;
}

export class TripStaticModel implements TripStatic {
	title: string;

	constructor() {
		this.title = "";
	}
}
