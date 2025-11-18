import React, { createContext, useContext, useState } from "react";
const SettingsContext = createContext();

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState({ theme: "light", currencySymbol: "R" });
    const updateSetting = (k, v) => setSettings(s => ({ ...s, [k]: v }));
    return <SettingsContext.Provider value={{ settings, updateSetting }}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
    return useContext(SettingsContext);
}
