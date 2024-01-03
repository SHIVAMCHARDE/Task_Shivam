import React from 'react'
import '../Stylesheets/Content.css'
import SideMenu from '../Components/SideMenu'
import MainContent from '../Components/MainContent'

const Content = () => {
  return (
    <div className='contentContainer'>
      <SideMenu/>
      <MainContent/>
    </div>
  )
}

export default Content
