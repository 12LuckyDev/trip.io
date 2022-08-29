import { TripSection } from "./trip-section.model";

export interface Trip {
	sections: TripSection[];
}

export class TripModel implements Trip {
	sections: TripSection[];

	constructor() {
		this.sections = [];
	}
}
