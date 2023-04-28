// custom debounce fn
export const useDebounce = (fn, delay) => {
	let timeout;

	// return function that takes arg and apply to the function
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
};
