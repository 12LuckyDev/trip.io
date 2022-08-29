export const useObjectValueForm = <T>(
	model: T,
	edit: (model: T) => void
): ((value: T[keyof T], key: keyof T) => void) => {
	return (value: T[keyof T], key: keyof T) => edit({ ...model, [key]: value });
};
