import './index.css'

const Songslist = props => {
  const {songsList} = props
  const {id, sno, imgUrl, song, singer, mvName, time} = songsList
  return (
    <div className="songslist-container">
      <div className="song-card">
        <h6>{sno}</h6>
        <img src={imgUrl} />
        <div>
          <h6>{song}</h6>
          <p>{singer}</p>
        </div>
      </div>
      <h6 className="movie-name"> {mvName}</h6>
      <h6 className="time">{time}</h6>
    </div>
  )
}

export default Songslist
