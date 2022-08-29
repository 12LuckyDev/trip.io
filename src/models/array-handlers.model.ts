export type AddType<T> = (value?: T) => void;
export type EditType<T> = (value: T, index: number) => void;
export type MutateByIndexType = (index: number) => void;

export interface ArrayElementPositionHandlers {
	remove: MutateByIndexType;
	up: MutateByIndexType;
	down: MutateByIndexType;
}

export interface ArrayElementHandlers<T> extends ArrayElementPositionHandlers {
	edit: EditType<T>;
}

export interface ArrayHandlers<T> extends ArrayElementHandlers<T> {
	add: AddType<T>;
}
