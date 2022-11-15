import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { InfoData } from './data/InfoData';
import { InfoDataTwo } from './data/InfoData';
import { InfoDataThree } from './data/InfoData';
import {InfoDataFour} from './data/InfoData';
import {InfoDataSix} from './data/InfoData';
import {InfoDataFive} from './data/InfoData';
import {InfoDataSeven} from './data/InfoData';
import {InfoDataEight} from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import ButtonMailto from './components/ButtonMailTo';
// import ContactUs from './components/ContactUs';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>  {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <InfoSection {...InfoDataTwo}/>
      <InfoSection {...InfoDataThree}/>
      <InfoSection {...InfoDataFour}/>
      <InfoSection {...InfoDataFive}/>
      <InfoSection {...InfoDataSix}/>
      <InfoSection {...InfoDataSeven}/>
      <InfoSection {...InfoDataEight}/>
      {/* <a class="mailto" href="mailto:airndelight@gmail.com">Mail</a> */}
      <ButtonMailto label="Write me an E-Mail" mailto="mailto:riptattoos09@gmail.com" />
      {/* <ContactUs /> */}
      <Footer />
    </>
  );
}

export default App;
