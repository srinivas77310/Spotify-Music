import Side from '../Side'
import Searchheader from '../Searchheader'
import AlbumLists from '../AlbumLists'
import Footer from '../Footer'

import './index.css'

const albumsList = [
  {
    id: 75,
    imageUrl:
      'https://th.bing.com/th/id/OIP.6jaw2GN5wYqxpMdF_nOqPwAAAA?rs=1&pid=ImgDetMain',
    text: 'Jay Jay',
    music: '2003 Bardwaj',
  },
  {
    id: 76,
    imageUrl:
      'https://th.bing.com/th/id/OIP.JjNBapLp7aoD4ZlE-GjJogHaHa?w=500&h=500&rs=1&pid=ImgDetMain',
    text: 'Jale-2 ',
    music: '2023 Shivum Chowdray',
  },
  {
    id: 77,
    imageUrl:
      'https://a10.gaanacdn.com/images/albums/59/5657559/crop_480x480_5657559.jpg',
    text: 'Khafa',
    music: '2020.jokay, JJ47',
  },
  {
    id: 78,
    imageUrl:
      'https://th.bing.com/th/id/OIP.3mVGbJwKiv_s4IeYiHNygQHaHa?rs=1&pid=ImgDetMain',
    text: 'Zehar',
    music: '2022.Nebal Akbar,JJ47',
  },
  {
    id: 79,
    imageUrl:
      'https://i.scdn.co/image/ab67616d0000b273682680c149a877ac94fb48d4',
    text: 'Not Over It',
    music: '2020.JJ Hanoon',
  },
  {
    id: 80,
    imageUrl:
      'https://th.bing.com/th/id/OIP.pxMZVEv0dkbUah-gTDSwrAHaHa?rs=1&pid=ImgDetMain',
    text: 'Therpy',
    music: '2022.Jokhay',
  },
  {
    id: 81,
    imageUrl:
      'https://i.pinimg.com/originals/c3/c1/99/c3c199fb3977a4f546bcc37d2b929068.jpg',
    text: 'Crown',
    music: '2024 JJ Pelmely',
  },
  {
    id: 82,
    imageUrl:
      'https://th.bing.com/th/id/OIP.67KJ9zsF1vMDgC4jBFlvAgHaHa?rs=1&pid=ImgDetMain',
    text: 'City Lights',
    music: '2024.JJ',
  },
  {
    id: 83,
    imageUrl:
      'https://th.bing.com/th/id/OIP.KI9Gs6X2brtqGtMJNtmSZAHaEK?rs=1&pid=ImgDetMain',
    text: 'Talk to Later',
    music: '2023 JJ',
  },
  {
    id: 84,
    imageUrl:
      'https://a10.gaanacdn.com/gn_img/albums/DwPKOBbqVZ/PKOxYO9V3q/size_m_1704199103.jpg',
    text: 'Joe (Orginal..',
    music: '2023.Siddu Kumar',
  },
  {
    id: 85,
    imageUrl:
      'https://th.bing.com/th/id/OIP.FPjpUOVSJflctlyGeaELywHaHa?rs=1&pid=ImgDetMain',
    text: 'Jailer',
    music: '2023.Anuridh',
  },
  {
    id: 86,
    imageUrl:
      'https://th.bing.com/th/id/OIP.hPFzS-yuVy2wXmXEesFGogHaLk?rs=1&pid=ImgDetMain',
    text: 'Kalki',
    music: '2024 Anuridh',
  },
  {
    id: 87,
    imageUrl:
      'https://th.bing.com/th/id/OIP.JKiEYECn742s9ytgbIAMbQHaFJ?rs=1&pid=ImgDetMain',
    text: 'CharliPuth',
    music: '2017.CharliPuth',
  },
  {
    id: 88,
    imageUrl:
      'https://m.media-amazon.com/images/I/61+G-BqY-WL._SX354_SY354_BL0_QL100__UXNaN_FMjpg_QL85_.jpg',
    text: 'I Dream Of You',
    music: '2023.JJ',
  },
  {
    id: 89,
    imageUrl:
      'https://th.bing.com/th/id/R.582e9984b86e192a6f2221d93f142ccf?rik=8PpfWPDJGicKZw&riu=http%3a%2f%2fwww.soulinstereo.com%2fwp-content%2fuploads%2f2021%2f01%2fbookhead.jpg&ehk=C7HuCRQRhFB1ZVTXYK4DQ82yKXrMXpeIkhQi6rt2KHo%3d&risl=&pid=ImgRaw&r=0',
    text: 'Bookhead',
    music: '2024.JJ',
  },
]

const Albums = () => (
  <div>
    <div className="home-lg-container">
      <Side />
      <div className="music-container">
        <Searchheader />
        <div className="albums-container">
          <ul>
            {albumsList.map(each => (
              <AlbumLists albumList={each} key={each.id} />
            ))}
          </ul>
          <Footer />
        </div>
      </div>
    </div>
  </div>
)

export default Albums
