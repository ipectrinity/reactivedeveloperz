import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home/Home'
export default function Root() {
    return (
        <div>
            <Route path ="/" component={Home}/>
        </div>
    )
}
