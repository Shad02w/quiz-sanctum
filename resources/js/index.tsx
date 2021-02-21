import React from 'react'
import { render } from "react-dom"
import App from './App'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import 'tailwindcss/tailwind.css'


const theme = extendTheme({
})

render(
    <ChakraProvider>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </ChakraProvider>
    ,
    document.getElementById('root')
)
