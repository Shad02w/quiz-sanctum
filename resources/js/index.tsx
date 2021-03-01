import React from 'react'
import { render } from "react-dom"
import App from './App'
import { ThemeContextProvider } from './contexts/ThemeContext'
import 'tailwindcss/tailwind.css'
import { Windmill } from '@windmill/react-ui'


render(
    <Windmill>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </Windmill>
    ,
    document.getElementById('root')
)
