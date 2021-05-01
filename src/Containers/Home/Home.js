import React from "react";
// import classes from './Home.module.css'
import HeaderBlock from '../../Components/Header/Header'
import Banner from "../../Components/Banner/Banner";
import FooterBlock from "../../Components/Footer/Footer";
import ActionSection from "../../Components/ActionSection/ActionSection";

const Home = (props) => {

 
  return (<>
    <HeaderBlock/>
    <br/><br/>
    <Banner/>
    <br/><br/>
    <ActionSection {...props} />
    <br/><br/>
    <FooterBlock />
    <br/><br/>

  </>
  )
};

export default Home;
