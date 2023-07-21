import { useEffect } from 'react';

// BEGIN: ed8c6549bwf9 (fixed)
export function useWindowEvent<K extends keyof WindowEventMap>(
    type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions
): void;
export function useWindowEvent(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
): void {
    useEffect(() => {
        window.addEventListener(type, listener, options);
        return () => window.removeEventListener(type, listener, options);
    }, [type, listener, options]);
}
// END: ed8c6549bwf9 (fixed)
