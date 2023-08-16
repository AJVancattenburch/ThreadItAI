/* eslint-disable no-unused-vars */
import React from 'react'
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import {
  CustomButton,
  AIPicker,
  ColorPicker,
  FilePicker,
  Tab
} from './components';

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
