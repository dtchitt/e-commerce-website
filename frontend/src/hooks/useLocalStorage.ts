import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initVal: T | (() => T)) => {
	const [value, setVal] = useState<T>(() => {
		const jsonVal = localStorage.getItem(key);

		if (jsonVal != null) return JSON.parse(jsonVal);

		if (typeof initVal === 'function') {
			return initVal as () => T;
		}

		return initVal;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setVal] as [typeof value, typeof setVal];
};
