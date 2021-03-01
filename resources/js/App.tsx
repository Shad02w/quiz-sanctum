import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from '@components/Navbar'
import Questions from '@components/Questions'
import Candidates from '@components/Candidates'
import Result from '@components/Result'

const App = () => {

    return (
        <HashRouter>
            <div id='app' className='antialiased'>
                <Navbar />
                <section className='container mx-auto p-4 md:p-3'>
                    <Switch>
                        <Route exact path='/'>
                            <Questions />
                        </Route>
                        <Route path='/candidates'>
                            <Candidates />
                        </Route>
                        <Route path='/results'>
                            <Result />
                        </Route>
                    </Switch>
                </section>
            </div>
        </HashRouter>
    )

}

export default App;