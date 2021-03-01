import React from 'react'
import { render } from "react-dom"
import App from './App'
import 'tailwindcss/tailwind.css'
import { Windmill } from '@windmill/react-ui'


render(
    <Windmill>
        <App />
    </Windmill>
    ,
    document.getElementById('root')
)
