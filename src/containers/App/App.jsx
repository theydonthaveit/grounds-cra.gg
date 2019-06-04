import React from 'react';
import './App.css'
import Navbar from '../Navbar'
import HomeScreenForm from '../HomeScreenForm'

function App({ dashboard }) {
  const dashboardComponents = {
    homeScreenForm: <HomeScreenForm />,
    error: (<h1>ERROR</h1>)
  }

  return (
    <>
      {dashboardComponents[dashboard]}
    </>
  )
}

export default App;
