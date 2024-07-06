import {Link} from 'react-router-dom'
import './index.css'

const Tabitem = props => {
  const {tabList, changeTabId, isActive} = props
  const {id, text} = tabList
  const activeTabitemClassName = isActive ? 'active' : ''
  const changeTab = () => {
    changeTabId(id)
  }
  return (
    <Link to={id} className="link">
      <li onClick={changeTab} className={activeTabitemClassName}>
        {text}
      </li>
    </Link>
  )
}

export default Tabitem
