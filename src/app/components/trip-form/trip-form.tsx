import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { TextControl } from "../controls";
import { Card } from "react-bootstrap";
import { Formik, FormikProps } from "formik";
import * as yup from "yup";
import { TripFormDynamic } from "./trip-form-dynamic.component";
import { TripStatic, TripStaticModel } from "../../../models";

const schema = yup.object().shape({
	title: yup.string().required(),
});

const initialValues = new TripStaticModel();

export const TripForm: React.FC = () => {
	return (
		<Formik
			enableReinitialize
			validationSchema={schema}
			onSubmit={console.log}
			initialValues={initialValues}
		>
			{(formik: FormikProps<TripStatic>) => (
				<Form noValidate onSubmit={formik.handleSubmit}>
					<Card>
						<Card.Header>
							<h2>New trip</h2>
						</Card.Header>
						<Card.Body>
							<TextControl controlId="title" label="Title" />
						</Card.Body>
					</Card>

					<TripFormDynamic formik={formik} />

					<Button disabled={!formik.isValid} variant="primary" type="submit">
						SUBMIT
					</Button>
				</Form>
			)}
		</Formik>
	);
};
