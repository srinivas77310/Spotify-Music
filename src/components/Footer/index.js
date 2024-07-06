import {FaInstagram} from 'react-icons/fa'
import {FiTwitter, FiFacebook} from 'react-icons/fi'
import './index.css'

const Footer = () => (
  <div>
    <div className="footer">
      <ul>
        <li className="active1">Company</li>
        <li>about</li>
        <li>Jobs</li>
        <li>For the record</li>
      </ul>
      <ul>
        <li className="active1">Communities</li>
        <li>Developers</li>
        <li>For Artists</li>
        <li>Advertising</li>
        <li>Investors</li>
        <li>Vendors</li>
      </ul>
      <ul>
        <li className="active1">Usefull Links</li>
        <li>Support</li>
        <li>For Mobile App</li>
      </ul>
      <ul>
        <li className="active1">Spotify Plans</li>
        <li>Premium Individuals</li>
        <li>Premium Duo</li>
        <li>Premium student</li>
        <li>PreMium Family</li>
      </ul>
      <ul className="icons-container">
        <li>
          <FaInstagram />
        </li>
        <li>
          <FiTwitter />
        </li>
        <li>
          <FiFacebook />
        </li>
      </ul>
    </div>
    <hr />
    <div className="footer">
      <ul className="icons-container1">
        <li>Legal</li>
        <li>Safty & Privacy center</li>
        <li>Privacy Policy</li>
        <li>Cookies</li>
        <li>About Ads</li>
        <li>Accessblity</li>
      </ul>
      <li>2024SpotifyAB</li>
    </div>
  </div>
)

export default Footer
