import { TripFormEntryType } from "../enums";
import { generateUUID } from "../utils";
import { TripSubsection, TripSubsectionModel } from "./trip-subsection.model";
import { TripValue, TripValueModel } from "./trip-value.model";

export interface TripSectionEntry {
	uuid: string;
	type: TripFormEntryType;
	value?: TripValue;
	subsection?: TripSubsection;
}

export class TripSectionEntryModel implements TripSectionEntry {
	uuid: string;
	type: TripFormEntryType;
	value?: TripValue;
	subsection?: TripSubsection;

	constructor(type: TripFormEntryType) {
		this.uuid = generateUUID();
		this.type = type;

		switch (type) {
			case TripFormEntryType.subsection:
				this.subsection = new TripSubsectionModel(this.uuid);
				break;
			case TripFormEntryType.value:
				this.value = new TripValueModel(this.uuid);
				break;
		}
	}
}
