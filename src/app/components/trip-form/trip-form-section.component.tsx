import React from "react";
import Button from "react-bootstrap/Button";
import { TripFormEntryType } from "../../../enums";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useArrayElementForm } from "./hooks/array-element-form-hook";
import { useArrayEditor } from "./hooks/array-editor-hook";
import { TripFormCustomAccordion } from "./trip-form-custom-accordion.component";
import {
	ArrayElementHandlers,
	TripSection,
	TripSectionEntry,
	TripSectionEntryModel,
	TripStatic,
} from "../../../models";
import { TripFormEntryList } from "./trip-form-entry-list.component";
import { FormikContextType, useFormikContext } from "formik";
import { TextControl } from "../controls";

interface TripSectionProps {
	section: TripSection;
	index: number;
	arrayLength: number;
	handlers: ArrayElementHandlers<TripSection>;
}

export const TripFormSection: React.FC<TripSectionProps> = ({
	section,
	index,
	arrayLength,
	handlers,
}) => {
	const { setFieldValue }: FormikContextType<TripStatic> = useFormikContext();

	const { edit, ...toolbarHandlers } = handlers;
	const onEdit = useArrayElementForm(section, edit, index);
	const { add, ...elementHandlers } = useArrayEditor<
		TripSection,
		TripSectionEntry
	>(onEdit, section.entries, "entries", {
		// TODO move callback to wrapper
		onAdd: (added) => {
			setFieldValue(`${section.uuid}.${added.uuid}.title`, "");
		},
		onRemove: (removed) => {
			setFieldValue(`${section.uuid}.${removed.uuid}`, undefined);
		},
	});

	return (
		<TripFormCustomAccordion
			eventKey={section.uuid}
			title={`SECTION: ${section.uuid}`}
			index={index}
			arrayLength={arrayLength}
			handlers={toolbarHandlers}
		>
			<TextControl controlId={`${section.uuid}.title`} label="Title" />

			<TripFormEntryList
				parentUuid={section.uuid}
				entries={section.entries}
				handlers={elementHandlers}
			/>
			<ButtonGroup>
				<Button
					variant="primary"
					onClick={() =>
						add(new TripSectionEntryModel(TripFormEntryType.subsection))
					}
				>
					ADD SUBSECTION
				</Button>
				<Button
					variant="secondary"
					onClick={() =>
						add(new TripSectionEntryModel(TripFormEntryType.value))
					}
				>
					ADD VALUE
				</Button>
			</ButtonGroup>
		</TripFormCustomAccordion>
	);
};
