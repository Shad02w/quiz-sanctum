import React, { useCallback, useContext, useState } from 'react'
import { render } from "react-dom"
import App from './App'
import { ThemeContextProvider } from './contexts/ThemeContext'

render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
    ,
    document.getElementById('root'))
