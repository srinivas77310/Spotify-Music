import './index.css'

const Songs = props => {
  const {songsList} = props
  const {id, imageUrl, text} = songsList
  return (
    <li className="songs-contianer">
      <img src={imageUrl} className="songs-image" alt={id} />
      <p className="songs-text">{text}</p>
    </li>
  )
}

export default Songs
