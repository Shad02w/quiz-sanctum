import React, { useEffect, useContext } from 'react'
import { ThemeContext } from '@contexts/ThemeContext'
import Navbar from '@components/Navbar'
import Questions from '@components/Questions'
import axios from 'axios'

const App = () => {
    // const { dark } = useContext(ThemeContext)
    const dark = true

    useEffect(() => {
        if (dark)
            document.documentElement.classList.add('dark')
        else
            document.documentElement.classList.remove('dark')
    }, [dark])

    useEffect(() => {
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(res => console.log('token res', res))

    }, [])

    return (
        <div id='app' className='antialiased'>
            <Navbar />
            <section className='container mx-auto p-4 md:p-3'>
                <Questions />
            </section>
        </div>
    )

}

export default App;