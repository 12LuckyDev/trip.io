import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TripFormElementToolbar } from "./trip-form-element-toolbar.component";
import { ArrayElementPositionHandlers } from "../../../models";

interface TripFormCardHeaderProps {
	children?: React.ReactNode;
	onClick?: React.EventHandler<React.SyntheticEvent>;
	toolbarProps: {
		index: number;
		arrayLength: number;
		handlers: ArrayElementPositionHandlers;
	};
}

export const TripFormCardHeader: React.FC<TripFormCardHeaderProps> = ({
	toolbarProps,
	onClick,
	children,
}) => {
	return (
		<Card.Header>
			<Row>
				<Col onClick={onClick}>{children}</Col>
				<TripFormElementToolbar {...toolbarProps} />
			</Row>
		</Card.Header>
	);
};
