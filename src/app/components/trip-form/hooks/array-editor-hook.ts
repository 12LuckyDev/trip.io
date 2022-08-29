import arrayHandler, {
	ArrayHandlerOptType,
	ARRAY_OPERATION,
} from "@12luckydev/array-handler";
import { ArrayCallbacks, ArrayHandlers } from "../../../../models";

export const useArrayEditor = <T, V>(
	editModel: (value: T[keyof T], key: keyof T) => void,
	value: V[],
	key: keyof T,
	{ onAdd, onEdit, onRemove }: ArrayCallbacks<V> = {}
): ArrayHandlers<V> => {
	const editModelHandler = (opt: ArrayHandlerOptType<V, keyof V>) => {
		editModel(arrayHandler(value, opt) as unknown as T[keyof T], key);
	};

	return {
		add: (newValue?: V) => {
			if (newValue) {
				editModelHandler({
					operation: ARRAY_OPERATION.ADD,
					newValue: newValue,
				});
				onAdd?.(newValue);
			}
		},
		remove: (index: number) => {
			const removed = value[index];
			editModelHandler({ operation: ARRAY_OPERATION.REMOVE_AT, index });
			onRemove?.(removed);
		},
		edit: (newValue: V, index: number) => {
			const oldValue = value[index];
			editModelHandler({ operation: ARRAY_OPERATION.EDIT_AT, index, newValue });
			onEdit?.(newValue, oldValue);
		},
		up: (index: number) =>
			editModelHandler({ operation: ARRAY_OPERATION.MOVE_UP, index }),
		down: (index: number) =>
			editModelHandler({ operation: ARRAY_OPERATION.MOVE_DOWN, index }),
	};
};
