import React from "react";
// import classes from './Home.module.css'
import HeaderBlock from '../../Components/Header/Header'
import Banner from "../../Components/Banner/Banner";
import FooterBlock from "../../Components/Footer/Footer";
import ActionSection from "../../Components/ActionSection/ActionSection";
import Symptomps from "../../Components/InfoCards/Symptomps";
import Preventions from "../../Components/InfoCards/Preventions";
import Cure from "../../Components/InfoCards/Cure";


const Home = (props) => {

 
  return (<>
    <HeaderBlock/>
    <br/><br/>
    <Banner/>
    <br/><br/>
    <ActionSection {...props} />
    <br/><br/>
    <Symptomps/>
    <br/><br/>
    <Preventions/>
    <br/><br/>
    <Cure {...props} />
    <br/><br/>
    <FooterBlock />
    
    

  </>
  )
};

export default Home;
