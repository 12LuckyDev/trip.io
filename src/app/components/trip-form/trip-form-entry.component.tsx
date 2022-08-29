import React from "react";
import { TripFormEntryType } from "../../../enums";
import {
	ArrayElementHandlers,
	TripSectionEntry,
	TripSubsection,
	TripValue,
} from "../../../models";
import Card from "react-bootstrap/Card";
import { TripFormCardHeader } from "./trip-form-card-header.component";
import { TripFormValue } from "./trip-form-value.component";
import { TripFormSubsection } from "./trip-form-subsection.component";
import { useArrayElementForm } from "./hooks/array-element-form-hook";

interface TripFormEntryProps {
	parentUuid: string;
	entry: TripSectionEntry;
	index: number;
	arrayLength: number;
	handlers: ArrayElementHandlers<TripSectionEntry>;
}

export const TripFormEntry: React.FC<TripFormEntryProps> = ({
	parentUuid,
	entry,
	index,
	handlers,
	arrayLength,
}) => {
	const { edit, ...toolbarHandlers } = handlers;
	const { type, subsection, value } = entry;
	const onEdit = useArrayElementForm(entry, edit, index);
	const onEditSection = (subsection: TripSubsection) =>
		onEdit(subsection, "subsection");
	const onEditValue = (value: TripValue) => onEdit(value, "value");

	return (
		<Card>
			<TripFormCardHeader
				toolbarProps={{ index, arrayLength, handlers: toolbarHandlers }}
			>
				<h3>
					{TripFormEntryType[entry.type]}: {entry.uuid}
				</h3>
			</TripFormCardHeader>
			<Card.Body>
				{type === TripFormEntryType.subsection && !!subsection && (
					<TripFormSubsection
						parentUuid={parentUuid}
						edit={onEditSection}
						subsection={subsection}
					/>
				)}
				{type === TripFormEntryType.value && !!value && (
					<TripFormValue
						parentUuid={parentUuid}
						edit={onEditValue}
						value={value}
					/>
				)}
			</Card.Body>
		</Card>
	);
};
