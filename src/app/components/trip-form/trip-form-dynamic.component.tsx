import { useTripForm } from "./hooks/trip-form-hook";
import { TripFormSection } from "./trip-form-section.component";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { FormikProps } from "formik";
import { TripStatic } from "../../../models";

interface TripFormDynamicProps {
	formik: FormikProps<TripStatic>;
}

export const TripFormDynamic: React.FC<TripFormDynamicProps> = ({ formik }) => {
	const [{ sections }, { add, ...handlers }] = useTripForm(formik);

	return (
		<Accordion alwaysOpen>
			{sections.map((section, index) => (
				<TripFormSection
					key={section.uuid}
					section={section}
					index={index}
					arrayLength={sections.length}
					handlers={handlers}
				></TripFormSection>
			))}
			<Button
				variant="primary"
				onClick={() => {
					add();
				}}
			>
				ADD SECTION
			</Button>
		</Accordion>
	);
};
