import Side from '../Side'
import Header from '../Header'
import AllbumItems from '../AllbumItems'
import Footer from '../Footer'

import './index.css'

const podcastList = [
  {
    id: 58,
    imageUrl:
      'https://th.bing.com/th/id/OIP.-PAYtfrLD5QPEbtF2YwaxwHaFj?rs=1&pid=ImgDetMain',
    text: 'MahaBhartham',
    music: 'sep 2023',
    singer: '',
  },
  {
    id: 59,
    imageUrl:
      'https://www.buenamusica.com/media/fotos/discos/o/offer-nissim/offer-nissim_we-can-make-it-the-remixes.jpg',
    text: 'I Can Make it',
    music: 'Jun 27',
    singer: '',
  },
  {
    id: 60,
    imageUrl:
      'https://th.bing.com/th/id/OIP.wJj66rWLn3PaeqjhfE3MNAHaGP?w=990&h=834&rs=1&pid=ImgDetMain',
    text: 'MR Ballen',
    music: 'Dealing with the..',
    singer: 'jul 1',
  },
  {
    id: 61,
    imageUrl:
      'https://th.bing.com/th/id/OIP.-OwPiZyRMtCPvlkQ-kb4yAHaHa?rs=1&pid=ImgDetMain',
    text: 'Powerfull',
    music: 'jun 22',
    singer: '',
  },
  {
    id: 62,
    imageUrl:
      'https://i.scdn.co/image/ab6765630000ba8ab140d90265c88a78a15819a7',
    text: 'Break Limits',
    music: 'break the limits ',
    singer: 'Aug 22',
  },
  {
    id: 63,
    imageUrl:
      'https://th.bing.com/th/id/OIP.vvJY7wAbYFVojgfAHIXJgQHaE0?rs=1&pid=ImgDetMain',
    text: 'Mydear Mansu',
    music: 'sep 1',
    singer: '',
  },
  {
    id: 64,
    imageUrl:
      'https://th.bing.com/th/id/OIP.1rlidDrX4WCg04htj-GvwQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain',
    text: 'Insult',
    music: 'feb 9',
    singer: '',
  },
  {
    id: 65,
    imageUrl:
      'https://th.bing.com/th/id/R.36ff0da7d2c6a6914b1fddbf0e0eb07b?rik=OYJu84BHOANuEQ&riu=http%3a%2f%2fwww.christiancounselingco.com%2fwp-content%2fuploads%2f2015%2f08%2fDon-t-Give-Up-2014.jpg&ehk=4CIuyYdNl1%2bbxtgDkBvktEsXCDdMRGkdtB%2bua5dqXRQ%3d&risl=&pid=ImgRaw&r=0',
    text: 'Dont Give Up',
    music: 'Mar 20',
    singer: '',
  },
  {
    id: 66,
    imageUrl:
      'https://th.bing.com/th/id/OIP.HIocHcW0QaPu9tPgnKeJXAHaEy?rs=1&pid=ImgDetMain',
    text: 'Love and Lust',
    music: 'Aug 19',
    singer: 'Simon,M.m..',
  },
  {
    id: 67,
    imageUrl:
      'https://th.bing.com/th/id/OIP.PCvgzipXJxJ1qtTfxA2tbgHaEK?rs=1&pid=ImgDetMain',
    text: 'Death lie cynide',
    music: 'Apr 2020',
    singer: 'Ep-1 ',
  },
  {
    id: 68,
    imageUrl:
      'https://th.bing.com/th/id/OIP.yiBb4ODoMk6dBkOsv38hJgHaHa?rs=1&pid=ImgDetMain',
    text: 'Whats Your Purpose',
    music: 'Jul 2019',
    singer: '',
  },
  {
    id: 69,
    imageUrl: 'https://m.media-amazon.com/images/I/41PdInRz5lL.jpg',
    text: 'PG Radio',
    music: 'EP-1',
    singer: 'Jun 20',
  },
  {
    id: 70,
    imageUrl:
      'https://th.bing.com/th/id/OIP.s7ajgKANb9OdoKJG8BJxXQHaDH?rs=1&pid=ImgDetMain',
    text: 'on The Contentry',
    music: 'Dec 1',
    singer: '',
  },
  {
    id: 71,
    imageUrl:
      'https://th.bing.com/th/id/OIP.FaIn9A89MoXToaYG_9GZdgHaEn?rs=1&pid=ImgDetMain',
    text: 'PowerFull',
    music: 'Sep 20',
    singer: '',
  },
  {
    id: 72,
    imageUrl:
      'https://i.pinimg.com/originals/22/95/ce/2295cee33c1ea5d327d75b735b368a18.jpg',
    text: 'Ep-1 Love at First..',
    music: 'Love Quotates',
    singer: 'Dec 30',
  },
  {
    id: 73,
    imageUrl: 'https://i.ytimg.com/vi/q1egkw2qaNk/maxresdefault.jpg',
    text: 'Think Smart',
    music: 'Ep-1',
    singer: 'Jan 2',
  },
  {
    id: 74,
    imageUrl:
      'https://th.bing.com/th/id/OIP.wNre7JiUXH4uF28Hga9g0gHaEo?rs=1&pid=ImgDetMain',
    text: 'Dont Give Up',
    music: 'jan 20',
    singer: '',
  },
]

const Podcast = () => (
  <div>
    <div className="home-lg-container">
      <Side />
      <div className="music-container">
        <Header />
        <div className="podcast">
          <ul>
            {podcastList.map(each => (
              <AllbumItems albumList={each} key={each.id} />
            ))}
          </ul>
          <Footer />
        </div>
      </div>
    </div>
  </div>
)

export default Podcast
