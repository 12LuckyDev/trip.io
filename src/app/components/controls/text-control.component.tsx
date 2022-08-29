import Form from "react-bootstrap/Form";
import { useField } from "formik";

interface TextControlProps {
	controlId: string;
	label: string;
}

export const TextControl: React.FC<TextControlProps> = ({
	controlId,
	label,
}) => {
	const [field] = useField({ name: controlId });

	return (
		<Form.Group controlId={controlId}>
			<Form.Label>{label}</Form.Label>
			<Form.Control type="text" {...field} />
		</Form.Group>
	);
};
