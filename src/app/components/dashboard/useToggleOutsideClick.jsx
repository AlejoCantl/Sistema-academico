import { useEffect, useRef, useState } from 'react';

export default function useToggleWithOutsideClick(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);
    const ref = useRef(null);

    const toggle = () => setIsOpen(prev => !prev);
    const close = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                close();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return { ref, isOpen, toggle, close };
}
