import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import RecipientRegistration from "../Containers/Forms/RecipientRegistration/RecipientRegistration";
import DonorRegistration from "../Containers/Forms/DonorRegistration/DonorRegistration";
import FoodRegistration from "../Containers/Forms/FoodRegistration/FoodRegistration";
import OxygenCylinderRegistration from "../Containers/Forms/OxygenCylinderRegistration/OxygenCylinderRegistration";
import OxygenCylinderList from "./Lists/OxygenCylindersList/OxygenCylindersList";
import SubmitPage from "../Components/SubmitPage/SubmitPage";
import FoodList from "./Lists/FoodList/FoodList";
import VolunteerList from "./Lists/VolunteerList/VolunteerList";
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
        <Route
          exact
          path='/register/food-supply'
          component={FoodRegistration}
        />
        <Route
          exact
          path='/register/Oxygen-cylinders-supply'
          component={OxygenCylinderRegistration}
        />
        <Route exact path='/volunteer' component={VolunteerList}/>
        <Route exact path='/food' component={FoodList} />
        <Route exact path='/oxygenCylinders' component={OxygenCylinderList} />
        <Route exact path='/labtestcenters' />

        <Route path='/recipient-registered/:docId' component={SubmitPage} />
        <Route path='/consultant-registered/:docId' component={SubmitPage} />
        <Route path='/patient-registered/:docId' component={SubmitPage} />

        <Route
          path='/oxygen-cylinder-registered/:docId'
          component={SubmitPage}
        />
        <Route path='/food-supply-registered/:docId' component={SubmitPage} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}
