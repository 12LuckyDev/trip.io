import { useReducer } from "react";
import arrayHandler, {
	ARRAY_OPERATION,
	ArrayHandlerOptType,
} from "@12luckydev/array-handler";
import {
	ArrayHandlers,
	Trip,
	TripModel,
	TripSection,
	TripSectionModel,
	TripStatic,
} from "../../../../models";
import { FormikProps } from "formik";

type SectionOpt = ArrayHandlerOptType<TripSection, keyof TripSection>;

type ActionType = SectionOpt | { operation: string };

const reducer = (state: Trip, action: ActionType) => {
	const { sections } = state;
	switch (action.operation) {
		default:
			return {
				...state,
				sections: arrayHandler(sections, action as SectionOpt),
			};
	}
};

export const useTripForm = (
	formik: FormikProps<TripStatic>
): [Trip, ArrayHandlers<TripSection>] => {
	const [state, dispatch] = useReducer(reducer, new TripModel());
	const sectionsHandlers: ArrayHandlers<TripSection> = {
		add: () => {
			const newValue = new TripSectionModel();
			dispatch({
				operation: ARRAY_OPERATION.ADD,
				newValue,
			});
			formik.setFieldValue(`${newValue.uuid}.title`, "");
		},
		remove: (index: number) => {
			const toRemove = state.sections[index];
			dispatch({ operation: ARRAY_OPERATION.REMOVE_AT, index });
			formik.setFieldValue(`${toRemove.uuid}`, undefined);
		},
		edit: (newValue: TripSection, index: number) =>
			dispatch({ operation: ARRAY_OPERATION.EDIT_AT, index, newValue }),
		up: (index: number) =>
			dispatch({ operation: ARRAY_OPERATION.MOVE_UP, index }),
		down: (index: number) =>
			dispatch({ operation: ARRAY_OPERATION.MOVE_DOWN, index }),
	};

	return [state, sectionsHandlers];
};
