import './index.css'

const AllbumItems = props => {
  const {albumList} = props
  const {id, imageUrl, text, music, singer} = albumList
  return (
    <li className="album-contianer">
      <img src={imageUrl} alt={id} />
      <h6>{text}</h6>
      <p>{music}</p>
      <p>{singer}</p>
    </li>
  )
}

export default AllbumItems
