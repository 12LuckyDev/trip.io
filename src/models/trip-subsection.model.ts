import { TripSectionEntry } from "./trip-section-entry.model";

export interface TripSubsection {
	uuid: string;
	values: TripSectionEntry[];
}

export class TripSubsectionModel implements TripSubsection {
	uuid: string;
	values: TripSectionEntry[];

	constructor(uuid: string) {
		this.uuid = uuid;
		this.values = [];
	}
}
