import './index.css'

const Profilelist = props => {
  const {profileList} = props
  const {id, imageUrl, text, music} = profileList
  return (
    <li className="profilelist-container">
      <img src={imageUrl} alt={id} />
      <h6>{text}</h6>
      <p>{music}</p>
    </li>
  )
}

export default Profilelist
