import Side from '../Side'
import Searchheader from '../Searchheader'
import AllbumItems from '../AllbumItems'
import Footer from '../Footer'

import './index.css'

const geners = [
  {
    id: 41,
    imageUrl:
      'https://c.saavncdn.com/editorial/logo/JioTunesDeviSriPrasadTelugu_20200402062225.jpg',
    text: 'DSP Telugu..',
    music: 'melody songs',
    singer: 'from telugu...',
  },
  {
    id: 42,
    imageUrl: 'https://c.saavncdn.com/612/Awaara-Telugu-2013-500x500.jpg',
    text: 'Awara',
    music: 'Yuvan Shankar raj',
    singer: 'Simon,M.m..',
  },
  {
    id: 43,
    imageUrl:
      'https://th.bing.com/th/id/OIP.CWpwR9mzYvwIslgJSbHovwEyDM?rs=1&pid=ImgDetMain',
    text: 'Cheliya Orginal',
    music: 'A.R Rehman',
    singer: '',
  },
  {
    id: 44,
    imageUrl:
      'https://th.bing.com/th/id/OIP.uiX8LWvde2DDfyjNt8ksoAHaE8?rs=1&pid=ImgDetMain',
    text: '83 Orginal',
    music: 'Pritam',
    singer: '',
  },
  {
    id: 45,
    imageUrl:
      'https://th.bing.com/th/id/OIP.naIO2eU__lefahedtQGj9AAAAA?rs=1&pid=ImgDetMain',
    text: 'mollywood gold',
    music: 'the finest set of',
    singer: 'maliyalum music',
  },
  {
    id: 46,
    imageUrl:
      'https://3.bp.blogspot.com/--gkLICCaKRc/T3v8Dt7s_-I/AAAAAAAACgo/0sJ8FsAyz0U/s320/eega+front.jpg',
    text: 'Eaga (Orginal..',
    music: 'm.m.keravani',
    singer: '',
  },
  {
    id: 47,
    imageUrl:
      'https://th.bing.com/th/id/OIP.V-1mP0ZIIZRjczC4noN0EwAAAA?rs=1&pid=ImgDetMain',
    text: 'Pakka Local',
    music: 'As local as gets,',
    singer: 'Get your jam on with',
  },
  {
    id: 48,
    imageUrl:
      'https://th.bing.com/th/id/OIP.ke5_EOgwv1zpOIWVlGgf8wAAAA?rs=1&pid=ImgDetMain',
    text: '30 hits Pritum',
    music: 'Pritum',
    singer: '',
  },
  {
    id: 49,
    imageUrl:
      'https://th.bing.com/th/id/OIP.kBAfRIOsd-eDv1fJP482LAAAAA?rs=1&pid=ImgDetMain',
    text: 'Bachulor party',
    music: 'Rahul Raj',
    singer: '',
  },
  {
    id: 50,
    imageUrl:
      'https://th.bing.com/th/id/OIP.MfSOsklK75KNNW3MPuQO6AAAAA?rs=1&pid=ImgDetMain',
    text: 'India Indie',
    music: 'Best of the indain',
    singer: 'india scene cover',
  },
  {
    id: 51,
    imageUrl:
      'https://th.bing.com/th/id/OIP.f-MmkC7NX-_atw0F7TG9XAHaHa?rs=1&pid=ImgDetMain',
    text: 'Ram Charan Hits',
    music: 'By Spotify',
    singer: '',
  },
  {
    id: 52,
    imageUrl:
      'https://th.bing.com/th/id/OIP.bFfZsAcrxndAJtOi4NRINgHaHa?rs=1&pid=ImgDetMain',
    text: 'Trending India',
    music: 'trending indian hits',
    singer: '',
  },
  {
    id: 53,
    imageUrl:
      'https://th.bing.com/th/id/OIP.hVnRGHnQi1xYaB80AUyoRwHaKY?rs=1&pid=ImgDetMain',
    text: 'Guppy (Orginal..',
    music: 'Vishnu vijay',
    singer: 'Vinyak SasiKumar',
  },
  {
    id: 54,
    imageUrl:
      'https://th.bing.com/th/id/OIP.qGquKYYHYtZt_EjifhxphQHaHa?rs=1&pid=ImgDetMain',
    text: 'Express Raja',
    music: 'Praveen Lokaraj',
    singer: '',
  },
  {
    id: 55,
    imageUrl:
      'https://th.bing.com/th/id/OIP.awsWDrRDO0G93CEnP1G7ywAAAA?rs=1&pid=ImgDetMain',
    text: 'Nuvvu Nenu',
    music: 'R.P.Patnaik',
    singer: 'Simon,M.m..',
  },
  {
    id: 56,
    imageUrl:
      'https://th.bing.com/th/id/OIP.1JkRWuzYU03vac9Z6Foe4wAAAA?rs=1&pid=ImgDetMain',
    text: 'Hey Cenimika',
    music: 'Govindha Vasantha',
    singer: '',
  },
  {
    id: 57,
    imageUrl:
      'https://moviepazes.com/images/gallery/Manam%20Movie%20Posters/2posters.jpg',
    text: 'Daily Mix2',
    music: 'Anup Rubens, David',
    singer: 'Simon,M.m..',
  },
]

const Geners = () => (
  <div>
    <div className="home-lg-container">
      <Side />
      <div className="music-container">
        <Searchheader />
        <div className="geners">
          <ul>
            {geners.map(each => (
              <AllbumItems albumList={each} key={each.id} />
            ))}
          </ul>
          <Footer />
        </div>
      </div>
    </div>
  </div>
)

export default Geners
