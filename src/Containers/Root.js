import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import RecipientRegistration from '../Containers/Forms/RecipientRegistration/RecipientRegistration'
export default function Root() {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path='/register/recipient'
                    component={RecipientRegistration}
                />
                <Route path="/" component={Home} />
            </Switch>

        </div>
    )
}