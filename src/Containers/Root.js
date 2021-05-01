import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import RecipientRegistration from "../Containers/Forms/RecipientRegistration/RecipientRegistration";
import DonorRegistration from "../Containers/Forms/DonorRegistration/DonorRegistration";
import OxygenCylinderList from "./Lists/OxygenCylindersList/OxygenCylindersList";
export default function Root() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/register/recipient'
          component={RecipientRegistration}
        />
        <Route exact path='/register/donor' component={DonorRegistration} />
        <Route exact path='/doctors' />
        <Route exact path='/food' />
        <Route exact path='/oxygenCylinders' component={OxygenCylinderList} />
        <Route exact path='/labtestcenters' />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}
