import './index.css'

const AlbumLists = props => {
  const {albumList} = props
  const {id, imageUrl, text, music} = albumList
  return (
    <li className="albumlist-container">
      <img src={imageUrl} alt={id} />
      <h6>{text}</h6>
      <p>{music}</p>
    </li>
  )
}

export default AlbumLists
