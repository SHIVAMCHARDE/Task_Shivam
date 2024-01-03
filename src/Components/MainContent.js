import React from 'react'
import LowerContent from '../Components/LowerContent'
import '../Stylesheets/MainContent.css'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const MainContent = () => {
  return (
    <div className='mcContainer'>
      {/* Upper */}
      <div className='mcUpper'>
        <div className='heading'>
          <h3 className='heading' >Welcome, Spire Technology</h3> <p className='date'>Thursday, 17 May 2023</p>
        </div>
        <div className='leftButtons'>
          <button id='greyBtn'>See Recent Jobs Ads</button>
          <button id='greenBtn'>Add New Ad Jobs</button>
        </div>
      </div>

      {/* Middle */}
      <div className='mcMiddle'>
        {/* Card 1 */}
        <div className='card'>
          <OpenInFullOutlinedIcon fontSize="x-small" className='expand' />
          <BusinessCenterOutlinedIcon className='cardIcon' style={{ color: '#C21292' }} />
          <h5 className='cardName'>
            Total Jobs
          </h5>
          <div className='count' style={{ color: '#C21292' }}>40,55k</div>
        </div>
        <div className="rightBorder"></div>
        {/* Card 2 */}
        <div className='card'>
          <OpenInFullOutlinedIcon fontSize="x-small" className='expand' />
          <PersonOutlineOutlinedIcon className='cardIcon' style={{ color: '#3559E0' }} />
          <h5 className='cardName'>
            Applied Candidates
          </h5>
          <div className='count' style={{ color: '#3559E0' }}>1,256</div>
        </div>
        <div className="rightBorder"></div>
        {/* Card 3 */}
        <div className='card'>
          <OpenInFullOutlinedIcon fontSize="x-small" className='expand' />
          <MonetizationOnOutlinedIcon className='cardIcon' style={{ color: '#EF4040' }} />
          <h5 className='cardName'>
            Total Credit Left
          </h5>
          <div className='count' style={{ color: '#EF4040' }}>$39.99</div>
        </div>
        <div className="rightBorder"></div>
        {/* Card 4 */}
        <div className='card'>
          <OpenInFullOutlinedIcon fontSize="x-small" className='expand' />
          <BookmarkBorderOutlinedIcon className='cardIcon' style={{ color: '#12a112' }} />
          <h5 className='cardName'>
            Shortlist Candidates
          </h5>
          <div className='count' style={{ color: '#12a112' }}>1,450</div>
        </div>
      </div>

      {/* Lower */}
      <LowerContent />

    </div>
  )
}

export default MainContent
