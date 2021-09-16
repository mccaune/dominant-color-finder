// import React, { component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm />
      {/*<DominantColors />*/}
    </div>
  );
}

export default App;
