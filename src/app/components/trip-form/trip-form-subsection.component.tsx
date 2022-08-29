import {
	TripSectionEntry,
	TripSectionEntryModel,
	TripStatic,
	TripSubsection,
} from "../../../models";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { TripFormEntryType } from "../../../enums";
import { useArrayEditor } from "./hooks/array-editor-hook";
import { useObjectValueForm } from "./hooks/object-value-form-hook";
import { TripFormEntryList } from "./trip-form-entry-list.component";
import { FormikContextType, useFormikContext } from "formik";
import { TextControl } from "../controls";

interface TripFormSubsectionProps {
	parentUuid: string;
	subsection: TripSubsection;
	edit: (model: TripSubsection) => void;
}

export const TripFormSubsection: React.FC<TripFormSubsectionProps> = ({
	parentUuid,
	subsection,
	edit,
}) => {
	const { setFieldValue }: FormikContextType<TripStatic> = useFormikContext();
	const onEdit = useObjectValueForm(subsection, edit);
	// TODO move this to utils
	const uuidPath = `${parentUuid}.${subsection.uuid}`;

	const { add, ...elementHandlers } = useArrayEditor<
		TripSubsection,
		TripSectionEntry
	>(onEdit, subsection.values, "values", {
		// TODO move callback to wrapper
		onAdd: (added) => {
			setFieldValue(`${uuidPath}.${added.uuid}.title`, "");
		},
		onRemove: (removed) => {
			setFieldValue(`${uuidPath}.${removed.uuid}`, undefined);
		},
	});

	return (
		<Col>
			<TextControl controlId={`${uuidPath}.title`} label="Title" />

			<TripFormEntryList
				parentUuid={uuidPath}
				entries={subsection.values}
				handlers={elementHandlers}
			/>
			<Button
				variant="secondary"
				onClick={() => add(new TripSectionEntryModel(TripFormEntryType.value))}
			>
				ADD VALUE
			</Button>
		</Col>
	);
};
