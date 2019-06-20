import React from 'react';
import './App.css'
// import Navbar from '../Navbar'
import HomeScreenForm from '../HomeScreenForm'

function App({ screen }) {
  console.log('app')
  console.log(screen)
  const screenComponents = {
    homeScreenForm: <HomeScreenForm />,
    error: (<h1>ERROR</h1>)
  }

  return (
    <>
      {screenComponents[screen]}
    </>
  )
}

export default App;
