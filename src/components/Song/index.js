import Side from '../Side'
import Searchheader from '../Searchheader'
import Songslist from '../Songslist'
import Footer from '../Footer'

import './index.css'

const songList = [
  {
    id: 201,
    sno: 1,
    imgUrl:
      'https://static.toiimg.com/thumb/msid-80096078,width-219,height-317,imgsize-4689/80096078.jpg',
    song: 'Evrevro',
    singer: 'Vishal Mishra',
    mvName: 'Animal(Telugu)',
    time: '4.10',
  },
  {
    id: 202,
    sno: 2,
    imgUrl:
      'https://a10.gaanacdn.com/images/albums/76/279376/crop_480x480_279376.jpg',
    song: 'Eduta Neeve',
    singer: 'SP.Balasubramanyum',
    mvName: 'Abinandhna',
    time: '4.40',
  },
  {
    id: 203,
    sno: 3,
    imgUrl:
      'https://i.pinimg.com/originals/00/81/64/008164f2a10cefc2be4416fa07630d34.jpg',
    song: 'Rao gari abbayai',
    singer: 'Devi Sri Prasad',
    mvName: 'Mr.Perfect',
    time: '3.50',
  },
  {
    id: 204,
    sno: 4,
    imgUrl:
      'https://c.saavncdn.com/835/OK-Jaanu-Original-Motion-Picture-Soundtrack-Hindi-2017-20230203133341-500x500.jpg',
    song: 'Enna Sona',
    singer: 'Arjhith Singh',
    mvName: 'Ok Jannu',
    time: '4.20',
  },
  {
    id: 205,
    sno: 5,
    imgUrl:
      'https://th.bing.com/th/id/OIP.A_EYad8TnXwosmBTOc8UTQAAAA?rs=1&pid=ImgDetMain',
    song: 'Chinni Chinni',
    singer: 'Anup Rubens',
    mvName: 'Manum',
    time: '4.30',
  },
  {
    id: 206,
    sno: 6,
    imgUrl:
      'https://th.bing.com/th/id/OIP.cr9VddVwrKFscZslGz3TJwHaMp?rs=1&pid=ImgDetMain',
    song: 'Gallo Tellinattu',
    singer: 'Devi Sri Prasadh',
    mvName: 'Jalsa',
    time: '4.30',
  },
  {
    id: 207,
    sno: 7,
    imgUrl:
      'https://th.bing.com/th/id/OIP.sNbWnrcuzeKjtSyFNT5XxgHaHa?rs=1&pid=ImgDetMain',
    song: 'Sanum re',
    singer: 'Arjhith Singh',
    mvName: 'Snaum Re',
    time: '4.10',
  },
  {
    id: 208,
    sno: 8,
    imgUrl: 'https://i.ytimg.com/vi/nODmjuuyGYU/maxresdefault.jpg',
    song: 'Sajini',
    singer: 'Ram Sampath',
    mvName: 'Sajini',
    time: '4.15',
  },
  {
    id: 209,
    sno: 9,
    imgUrl:
      'https://th.bing.com/th/id/OIP.J8zS98X_QkmCnM_oVbTUeAHaHa?rs=1&pid=ImgDetMain',
    song: 'Emitemito',
    singer: 'Alphonse',
    mvName: 'Arjun Reddy',
    time: '4.50',
  },
  {
    id: 210,
    sno: 10,
    imgUrl:
      'https://th.bing.com/th/id/OIP.HBiNUAVdNE-C_GSfWmAHRQAAAA?w=250&h=401&rs=1&pid=ImgDetMain',
    song: 'Hello',
    singer: 'Arman Malik',
    mvName: 'Hello',
    time: '3.40',
  },
  {
    id: 211,
    sno: 11,
    imgUrl:
      'https://assets.teenvogue.com/photos/56aaf2da1616893e5f7f519a/3:2/w_1200,h_630,c_limit/Nine%20Track%20Mind.jpg',
    song: 'Attention',
    singer: 'Charli Puth',
    mvName: 'Attention',
    time: '4.10',
  },
  {
    id: 212,
    sno: 12,
    imgUrl:
      'https://th.bing.com/th/id/OIP.L4n2XIRUuj7sKlaxVAofaQHaFj?rs=1&pid=ImgDetMain',
    song: 'Radhika',
    singer: 'Ram MiriYall',
    mvName: 'DJ Tillu-2',
    time: '4.10',
  },
  {
    id: 213,
    sno: 13,
    imgUrl:
      'https://th.bing.com/th/id/OIP.pW7AXkO8fR9K5IsoEoprPwHaKt?rs=1&pid=ImgDetMain',
    song: 'Soorudu',
    singer: 'Krishna Kanth',
    mvName: 'Salar',
    time: '2.10',
  },
  {
    id: 214,
    sno: 14,
    imgUrl:
      'https://th.bing.com/th/id/OIP.KymlaVaQyYMt0GwMJAcD4gAAAA?rs=1&pid=ImgDetMain',
    song: 'Sulthan',
    singer: 'Mohan Krishna',
    mvName: 'Kgf',
    time: '4.10',
  },
  {
    id: 215,
    sno: 15,
    imgUrl:
      'https://th.bing.com/th/id/OIP.4Pre_P2BzsfpH4YZF2lbNwHaHa?rs=1&pid=ImgDetMain',
    song: 'Ninnle',
    singer: 'Anurag KulKarni',
    mvName: 'Radhy Shyam',
    time: '4.24',
  },
  {
    id: 216,
    sno: 16,
    imgUrl:
      'https://th.bing.com/th/id/OIP.aS-wVEp8hdtv3Q-Yf87DSwHaIU?rs=1&pid=ImgDetMain',
    song: 'Baby',
    singer: 'Justin Biber',
    mvName: 'My World 2.0',
    time: '4.10',
  },
]

const Song = () => (
  <div>
    <div className="home-lg-container">
      <Side />
      <div className="music-container">
        <Searchheader />
        <div className="songslist">
          <ul>
            {songList.map(each => (
              <Songslist songsList={each} key={each.id} />
            ))}
          </ul>
          <Footer />
        </div>
      </div>
    </div>
  </div>
)

export default Song
