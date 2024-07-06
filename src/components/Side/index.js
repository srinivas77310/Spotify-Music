import {Link} from 'react-router-dom'
import {FiHome} from 'react-icons/fi'
import {IoSearchOutline} from 'react-icons/io5'
import {LuLibrary} from 'react-icons/lu'
import {FaPlus} from 'react-icons/fa6'
import {FaArrowRight} from 'react-icons/fa'

import './index.css'

const Side = () => (
  <div className="side-container">
    <ul className="home-search-container">
      <Link to="/" className="link">
        <li>
          <FiHome className="icons" />
          Home
        </li>
      </Link>
      <Link to="/search" className="link">
        <li>
          <IoSearchOutline className="icons" /> Search
        </li>
      </Link>
    </ul>
    <div className="your-library">
      <ul>
        <li>
          <LuLibrary className="icons" /> Your Library
        </li>
      </ul>
      <div className="libray-add">
        <p>
          <FaPlus className="icons" />
        </p>

        <p>
          <FaArrowRight />
        </p>
      </div>
    </div>
    <div className="create-playlist">
      <h6>Create your first playlist</h6>
      <p>its easy we will help you</p>
      <button type="button">Create Playlist</button>
    </div>
    <div className="create-podcast">
      <h6>Lets find some podcasts to follow</h6>
      <p>we will keep update you</p>
      <button type="button">Browse Podcast</button>
    </div>
  </div>
)

export default Side
