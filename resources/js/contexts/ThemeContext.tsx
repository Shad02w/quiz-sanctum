import React, { createContext, PropsWithChildren } from 'react'
import { isSystemDarkMode } from '../models/Utils'

interface ThemeContextType {
    dark: boolean
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

interface ThemeContextProviderProps {

}

export const ThemeContextProvider = (props: PropsWithChildren<ThemeContextProviderProps>) => {
    const { children } = props
    return (
        <ThemeContext.Provider value={{ dark: isSystemDarkMode() }}>
            {children}
        </ThemeContext.Provider>

    )
}
