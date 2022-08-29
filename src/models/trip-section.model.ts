import { generateUUID } from "../utils";
import { TripSectionEntry } from "./trip-section-entry.model";

export interface TripSection {
	uuid: string;
	entries: TripSectionEntry[];
}

export class TripSectionModel implements TripSection {
	uuid: string;
	entries: TripSectionEntry[];

	constructor() {
		this.uuid = generateUUID();
		this.entries = [];
	}
}
