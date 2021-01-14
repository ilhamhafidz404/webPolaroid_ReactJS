import React, { Component } from 'react';
import Navbar from './component/navbar';
import Slider from './component/slider';
import Main from './component/main';
import Tilt from './component/tilt';
import Owner from './component/owner';
import Gallery from './component/gallery';
import Footer from "./component/footer"

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Slider/>
        <Main/>
        {/* <Tilt/> */}
        <Owner/>
        <Gallery />
        <Footer/>
      </>
    );
  }
}

export default App;