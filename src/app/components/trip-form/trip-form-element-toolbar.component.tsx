import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrashCan,
	faArrowDown,
	faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { ArrayElementPositionHandlers } from "../../../models";

interface TripFormElementToolbarProps {
	index: number;
	arrayLength: number;
	handlers: ArrayElementPositionHandlers;
}

export const TripFormElementToolbar: React.FC<TripFormElementToolbarProps> = ({
	index,
	handlers,
	arrayLength,
}) => {
	const { remove, up, down } = handlers;
	return (
		<Col sm={2}>
			<Button
				variant="primary"
				onClick={() => down(index)}
				disabled={index === 0}
			>
				<FontAwesomeIcon icon={faArrowUp} />
			</Button>
			<Button
				variant="primary"
				onClick={() => up(index)}
				disabled={index === arrayLength - 1}
			>
				<FontAwesomeIcon icon={faArrowDown} />
			</Button>
			<Button variant="danger" onClick={() => remove(index)}>
				<FontAwesomeIcon icon={faTrashCan} />
			</Button>
		</Col>
	);
};
