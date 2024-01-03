import { useState } from 'react'
import '../Stylesheets/SideMenu.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const SideMenu = () => {

  const [isUpperVisible, setIsUpperVisible] = useState(false);
  const [showMenu, setMenu] = useState(true);
  const [showExit, setExit] = useState(false);

  const handleToggle = () => {
    setIsUpperVisible(!isUpperVisible);
    setExit(!showExit);
    setMenu(!showMenu);
  };

  return (
    <div className='smContainer'>

      {showMenu && <div className="toggleShow" onClick={()=>handleToggle()}>
          <MenuIcon fontSize='large' className='NavMenuIcon'/>
      </div>}

      {showExit && <div className="toggleHide" onClick={()=>handleToggle()}>
          <CloseIcon fontSize='large' className='NavCloseIcon'/>
      </div>}

      <div className={`smUpper${isUpperVisible ? 'show' : 'hide'}`} id='smUpperid'>
        <a href="#" className='smItems' id='overview'><WidgetsOutlinedIcon className='smIcons' /> Overview</a>
        <a href="#" className='smItems'><PersonOutlineOutlinedIcon className='smIcons'/>Company Profile</a>
        <a href="#" className='smItems'><WorkOutlineOutlinedIcon className='smIcons'/>Post A Jobs</a>
        <a href="#" className='smItems'><GroupsOutlinedIcon className='smIcons'/>All Candidates</a>
        <a href="#" className='smItems'><BookmarkBorderOutlinedIcon className='smIcons'/>Shortlist Candidates</a>
        <a href="#" className='smItems'><BusinessCenterOutlinedIcon className='smIcons'/>Job Lists</a>
        <a href="#" className='smItems'><ReceiptLongOutlinedIcon className='smIcons'/>Invoices</a>
        <a href="#" className='smItems'><SubscriptionsOutlinedIcon className='smIcons'/>Subscription</a>

      </div>

      <div className={`smLower${isUpperVisible ? 'show' : 'hide'}`} id='smLowerid'>
        <a href="#" className='smItems' id='logOut'><LogoutOutlinedIcon className='smIcons'/>Logout</a>
      </div>
      
    </div>
  )
}

export default SideMenu
