import { lightTheme } from './lightTheme';
import React, { useState } from 'react'

export const ThemeContext = React.createContext({
    theme: lightTheme,
    setTheme: () => { }
})
