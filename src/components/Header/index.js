import {SlArrowLeft, SlArrowRight} from 'react-icons/sl'
import {FaRegBell} from 'react-icons/fa'
import {FaRegCircleDown} from 'react-icons/fa6'

import {Component} from 'react'

import Tabitem from '../Tabitem'
import './index.css'

const tabList = [
  {id: '/', text: 'All'},
  {id: 'Music', text: 'Music'},
  {id: 'Podcast', text: 'Podcast'},
]

class Header extends Component {
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
          </div>
          <ul className="top-ul-container">
            <li>Explore Premium</li>
            <li>
              <FaRegCircleDown /> Install App
            </li>
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

export default Header
