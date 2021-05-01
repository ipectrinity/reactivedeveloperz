import React from "react";
// import classes from './Home.module.css'
import Header from '../../Components/Header/Header'
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import ActionSection from "../../Components/ActionSection/ActionSection";

const Home = (props) => {

 
  return (<>
    <Header/>
    <br/><br/>
    <Banner/>
    <br/><br/>
    <ActionSection {...props} />
    <br/><br/>
    <Footer/>

  </>
  )
};

export default Home;
