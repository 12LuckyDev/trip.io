import React, { useContext } from "react";
import { ArrayElementPositionHandlers } from "../../../models";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/esm/AccordionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { TripFormCardHeader } from "./trip-form-card-header.component";

import "./trip-custom-accordion.component.scss";

interface TripCustomAccordionProps {
	eventKey: string;
	children?: React.ReactNode;
	title?: string;
	index: number;
	arrayLength: number;
	handlers: ArrayElementPositionHandlers;
}

export const TripFormCustomAccordion: React.FC<TripCustomAccordionProps> = ({
	eventKey,
	children,
	title,
	...toolbarProps
}) => {
	const { activeEventKey } = useContext(AccordionContext);
	const onClick = useAccordionButton(eventKey);
	return (
		<Card>
			<TripFormCardHeader toolbarProps={toolbarProps} onClick={onClick}>
				<div className="section-header">
					<h2>{title}</h2>
					<FontAwesomeIcon
						className={cx("section-icon", {
							open: activeEventKey?.includes(eventKey),
						})}
						icon={faAngleDown}
					/>
				</div>
			</TripFormCardHeader>
			<Accordion.Collapse eventKey={eventKey}>
				<Card.Body>{children}</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};
