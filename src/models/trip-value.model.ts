import { TripFormValueType } from "../enums";
import { generateUUID } from "../utils";

export interface TripValue {
	uuid: string;
	type: TripFormValueType;
	title: string;
}

export class TripValueModel implements TripValue {
	uuid: string;
	type: TripFormValueType;
	title: string;

	constructor(uuid?: string) {
		this.uuid = uuid ?? generateUUID();
		this.type = TripFormValueType.text;
		this.title = "";
	}
}
