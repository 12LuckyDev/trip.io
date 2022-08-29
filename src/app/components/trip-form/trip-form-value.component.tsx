import { TripValue } from "../../../models";
import { TextControl } from "../controls";

interface TripFormValueProps {
	parentUuid: string;
	value: TripValue;
	edit: (model: TripValue) => void;
}

export const TripFormValue: React.FC<TripFormValueProps> = ({
	value,
	parentUuid,
}) => {
	const uuidPath = `${parentUuid}.${value.uuid}`;

	return (
		<>
			<TextControl controlId={`${uuidPath}.title`} label="Title" />
		</>
	);
};
