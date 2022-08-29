import { EditType } from "../../../../models";

export const useArrayElementForm = <T>(
	model: T,
	edit: EditType<T>,
	index: number
): ((value: T[keyof T], key: keyof T) => void) => {
	return (value: T[keyof T], key: keyof T) =>
		edit({ ...model, [key]: value }, index);
};
