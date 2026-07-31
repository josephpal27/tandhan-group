"use client";

import { createContext, useContext, useState } from "react";

const GlobalPresenceContext = createContext(null);

export const GlobalPresenceProvider = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <GlobalPresenceContext.Provider value={{ activeIndex, setActiveIndex }}>
            {children}
        </GlobalPresenceContext.Provider>
    );
};

export const useGlobalPresence = () => {
    const context = useContext(GlobalPresenceContext);
    if (!context) {
        throw new Error("useGlobalPresence must be used within a GlobalPresenceProvider");
    }
    return context;
};