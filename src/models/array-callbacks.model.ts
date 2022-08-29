export interface ArrayCallbacks<T> {
	onAdd?: (added: T) => void;
	onRemove?: (removed: T) => void;
	onEdit?: (newValue: T, oldValue: T) => void;
}
