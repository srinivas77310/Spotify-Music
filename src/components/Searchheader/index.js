import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'
import {FaRegBell} from 'react-icons/fa'
import {Component} from 'react'

import Tabitem from '../Tabitem'
import './index.css'

const tabList = [
  {id: '/', text: 'All'},
  {id: 'albums', text: 'Albums'},
  {id: 'songs', text: 'Songs'},
  {id: 'playlist', text: 'PlayList'},
  {id: 'podcast&shows', text: 'Podcast&Shows'},
  {id: 'profiles', text: 'Profiles'},
  {id: 'artists', text: 'Artists'},
  {id: 'Geners&Moods', text: 'Geners&Moods'},
]

class Searchheader extends Component {
  state = {activeTabId: tabList[0].id}

  changeTabId = activeTabId => {
    this.setState({activeTabId})
  }

  render() {
    const {activeTabId} = this.state
    return (
      <div className="header-container">
        <div className="top-header">
          <div className="left-right-btns">
            <button type="button">
              <SlArrowLeft />
            </button>
            <button type="button">
              <SlArrowRight />
            </button>
            <input type="search" className="search" placeholder="search" />
          </div>
          <ul className="top-ul-container">
            <li>Install App</li>
            <li>
              <FaRegBell />
            </li>
            <li className="s-color">S</li>
          </ul>
        </div>
        <ul className="bottom-header-container">
          {tabList.map(each => (
            <Tabitem
              tabList={each}
              key={each.id}
              changeTabId={this.changeTabId}
              isActive={activeTabId === each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Searchheader
