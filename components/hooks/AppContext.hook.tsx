'use client';

import { createContext } from 'react';

export type AppContextType = {
    display: {
        modal: boolean;
        navMenu: boolean;
    };
    setDisplay: React.Dispatch<
        React.SetStateAction<{
            modal: boolean;
            navMenu: boolean;
        }>
    >;
};

export const AppContext = createContext<AppContextType>({
    display: {
        modal: false,
        navMenu: false,
    },
    setDisplay: () => { },
});