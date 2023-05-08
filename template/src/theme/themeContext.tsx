import { lightTheme } from './lightTheme';
import React, { useState } from 'react'

export const ThemeContext = React.createContext({
    theme: lightTheme,
    setTheme: () => { }
})

// export const ThemeContextProvider = (props: any) => {

//     const setTheme = (theme: any) => {
//         setState({ ...state, theme: theme })
//     }

//     const initState = {
//         theme: lightTheme,
//         setTheme: setTheme
//     }

//     const [state, setState] = useState(initState)

//     return (
//         <ThemeContext.Provider value={state}  >
//         { props.children }
//         </ThemeContext.Provider>
 
 
//   )
// }