import React from "react";
import { ArrayElementHandlers, TripSectionEntry } from "../../../models";
import { TripFormEntry } from "./trip-form-entry.component";

interface TripFormEntryListProps {
	parentUuid: string;
	handlers: ArrayElementHandlers<TripSectionEntry>;
	entries: TripSectionEntry[];
}

export const TripFormEntryList: React.FC<TripFormEntryListProps> = ({
	parentUuid,
	handlers,
	entries,
}) => {
	return (
		<>
			{entries.map((entry, index) => (
				<TripFormEntry
					parentUuid={parentUuid}
					key={entry.uuid}
					entry={entry}
					index={index}
					arrayLength={entries.length}
					handlers={handlers}
				/>
			))}
		</>
	);
};
