import React from 'react'
import '../Stylesheets/Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import headerProfile from '../Assets/headerProfile.jpg'

const Header = () => {
  return (
    <div className='hContainer'>
        <div className='hLeft'>
            ReelMySkill
        </div>
        <div className='hRight'>
            <div className='hIcon'><SearchOutlinedIcon/></div>
            <div className='hIcon'><NotificationsNoneOutlinedIcon/></div>
            <div className='user'>
                <img src='https://xsgames.co/randomusers/avatar.php?g=male' alt=""  className='headerProfileImg'/>
                <b className='headerProfileName'>Spire T</b>
            </div>
            <div className='hIcon'><KeyboardArrowDownOutlinedIcon style={{color:'green'}}/></div>
        </div>
      
    </div>
  )
}

export default Header
