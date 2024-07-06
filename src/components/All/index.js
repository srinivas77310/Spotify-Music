import Songs from '../Songs'
import AllbumItems from '../AllbumItems'
import AlbumLists from '../AlbumLists'
import Footer from '../Footer'

import './index.css'

const songsList = [
  {
    id: 1,
    imageUrl:
      'https://moviepazes.com/images/gallery/Manam%20Movie%20Posters/2posters.jpg',
    text: 'Manam',
  },
  {
    id: 2,
    imageUrl:
      'https://i.pinimg.com/originals/2c/11/d0/2c11d0c402b4fbcb70501b462c4f4d1d.jpg',
    text: 'Mr.Perfect',
  },
  {
    id: 3,
    imageUrl:
      'https://th.bing.com/th/id/OIP.pjE1NPAE0w6CIwsk7EmSxQHaHa?rs=1&pid=ImgDetMain',
    text: 'Rangum',
  },
  {
    id: 4,
    imageUrl:
      'https://th.bing.com/th/id/OIP.4CAjhO1UL3Cnx1aREVy9RgHaHa?rs=1&pid=ImgDetMain',
    text: 'Prema Kavali',
  },
  {
    id: 5,
    imageUrl:
      'https://th.bing.com/th/id/OIP.thuwpSgiboFKLCqr4KJvlgHaHa?rs=1&pid=ImgDetMain',
    text: 'Rahman Hits',
  },
  {
    id: 6,
    imageUrl:
      'https://th.bing.com/th/id/OIP.sNbWnrcuzeKjtSyFNT5XxgHaHa?rs=1&pid=ImgDetMain',
    text: 'Sanam Re',
  },
  {
    id: 7,
    imageUrl:
      'https://th.bing.com/th/id/OIP.Xu-xM1EJevMmyCUgVvGAbAHaHa?rs=1&pid=ImgDetMain',
    text: 'Jalsa',
  },
  {
    id: 8,
    imageUrl:
      'https://th.bing.com/th/id/OIP.Xl8yk0svJeeOakxgitB8XQAAAA?rs=1&pid=ImgDetMain',
    text: 'Orange',
  },
]
const madeforList = [
  {
    id: 9,
    imageUrl:
      'https://th.bing.com/th/id/OIP.zk1MsCHW_c5C-U4INjyscgHaHa?rs=1&pid=ImgDetMain',
    text: 'Daily Mix2',
    music: 'Anup Rubens, David',
    singer: 'Simon,M.m..',
  },
  {
    id: 10,
    imageUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/94/31/82/94318286-afd0-2c70-9b8b-2f39e7574860/840214495915.png/1200x1200bf-60.jpg',
    text: 'Daily Mix3',
    music: 'Akil Sachdev',
    singer: 'Sachet Tandon,AR..',
  },
  {
    id: 11,
    imageUrl:
      'https://th.bing.com/th/id/OIP.uJACotI_wuoFukG8oh5bmQAAAA?rs=1&pid=ImgDetMain',
    text: 'Daily Mix4',
    music: 'Pritam, Adnan sami',
    singer: 'Badsah and more',
  },
  {
    id: 12,
    imageUrl:
      'https://th.bing.com/th/id/OIP.JKiEYECn742s9ytgbIAMbQHaFJ?rs=1&pid=ImgDetMain',
    text: 'Daily Mix5',
    music: 'Charliputh',
    singer: 'Kids,wizkhalifa and..',
  },
  {
    id: 13,
    imageUrl:
      'https://th.bing.com/th/id/OIP.7l9i9xQ_0FR8xnXbSoK8uwHaHa?rs=1&pid=ImgDetMain',
    text: 'Daily Mix6',
    music: 'Sunny austin',
    singer: 'Chowrasta and...',
  },
]

const jumpBackin = [
  {
    id: 16,
    imageUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/a4/03/7e/a4037e6c-dd6a-00f1-21c2-15c25772386b/cover.jpg/1200x1200bf-60.jpg',
    text: 'Daily Mix7',
    music: 'Anup Rubens, David',
    singer: 'Simon,M.m..',
  },
  {
    id: 17,
    imageUrl:
      'https://th.bing.com/th/id/OIP.Xl8yk0svJeeOakxgitB8XQAAAA?rs=1&pid=ImgDetMain',
    text: 'Daily Mix8',
    music: 'Orange',
    singer: 'Haris Jairaj',
  },
  {
    id: 18,
    imageUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/74/29/4d742965-80f1-a7e4-a3f3-09825ee37e28/cover.jpg/1200x1200bf-60.jpg',
    text: 'Daily Mix9',
    music: 'Jalsa',
    singer: 'Devi Sri Prasad',
  },
  {
    id: 19,
    imageUrl:
      'https://th.bing.com/th/id/OIP.HBiNUAVdNE-C_GSfWmAHRQAAAA?w=250&h=401&rs=1&pid=ImgDetMain',
    text: 'Daily Mix10',
    music: 'Hello',
    singer: 'Anup Rubens',
  },
  {
    id: 20,
    imageUrl: 'https://i.ytimg.com/vi/nODmjuuyGYU/maxresdefault.jpg',
    text: 'Sajini',
    music: 'Ram Sampth,Arjhith',
    singer: 'Singh,Prasnth Pandey',
  },
]

const recentlyPlayed = [
  {
    id: 21,
    imageUrl:
      'https://th.bing.com/th/id/R.b105c366704315b23bb7ad34a3bf1700?rik=zAtyvJql7fh0SQ&riu=http%3a%2f%2fwww.chitramala.in%2fwp-content%2fuploads%2f2014%2f09%2fManam-Oscar.jpg&ehk=PftkRmI1yq0D28olrTngjkewqcRHUFgttHKpgQmGxvk%3d&risl=&pid=ImgRaw&r=0',
    text: 'Manum',
    music: 'Anup Rubens, David',
  },
  {
    id: 22,
    imageUrl:
      'https://th.bing.com/th/id/OIP.dH_DJln3VAoiouitM4SuwwAAAA?w=426&h=435&rs=1&pid=ImgDetMain',
    text: 'Mr.Perfect',
    music: 'Devi Sri Prasad',
  },
  {
    id: 23,
    imageUrl:
      'https://th.bing.com/th/id/OIP.E6MUj84euI5aO6np04c_owHaHa?rs=1&pid=ImgDetMain',
    text: 'Vaarayam aayrin',
    music: 'Harris Jayraj',
  },
  {
    id: 24,
    imageUrl:
      'https://www.game-ost.ru/static/covers_soundtracks/1/2/121785_289996.jpg',
    text: 'Rangum',
    music: 'Harris Jayraj',
  },
  {
    id: 25,
    imageUrl:
      'https://th.bing.com/th/id/OIP.Xl8yk0svJeeOakxgitB8XQAAAA?rs=1&pid=ImgDetMain',
    text: 'Orange',
    music: 'Anup Rubens',
  },
]

const popularAlbums = [
  {
    id: 26,
    imageUrl: 'https://i.ytimg.com/vi/nODmjuuyGYU/maxresdefault.jpg',
    text: 'Sajni',
    music: 'Arjhith singh',
    singer: 'Simon,M.m..',
  },
  {
    id: 27,
    imageUrl:
      'https://th.bing.com/th/id/OIP._-LWXmyzvVh7698Aa4B1UQAAAA?rs=1&pid=ImgDetMain',
    text: 'Rockstar',
    music: 'A.R.Rehaman',
    singer: 'Simon,M.m..',
  },
  {
    id: 28,
    imageUrl:
      'https://th.bing.com/th/id/OIP.NVvJErZHeVBrFA_Xg8BZNAHaLH?rs=1&pid=ImgDetMain',
    text: 'Animal',
    music: 'Manan Bardwaj',
    singer: 'Simon,M.m..',
  },
  {
    id: 29,
    imageUrl:
      'https://th.bing.com/th/id/OIP.7lTToYvyMvsMjcXRam-FWAHaHa?rs=1&pid=ImgDetMain',
    text: 'Ashuqi-2',
    music: 'Arjith Singh',
    singer: 'Simon,M.m..',
  },
  {
    id: 30,
    imageUrl:
      'https://th.bing.com/th/id/OIP.Dqea5Yd6mJFWz_IZaRReLwAAAA?rs=1&pid=ImgDetMain',
    text: 'Aavesham',
    music: 'Sushin shyam',
    singer: 'Simon,M.m..',
  },
]

const indiasBest = [
  {
    id: 31,
    imageUrl:
      'https://th.bing.com/th/id/OIP.j7h1ZF3-3ZA0aJSNBIzcHwHaLH?rs=1&pid=ImgDetMain',
    text: 'Panjabi-101',
    music: 'Ultimate Panjabi-101',
    singer: 'Hits with Aujila',
  },
  {
    id: 32,
    imageUrl:
      'https://th.bing.com/th/id/OIP._oURNC2vUvT0lnM4Xxd_IwHaHa?rs=1&pid=ImgDetMain',
    text: 'Radar India',
    music: 'most existing artists',
    singer: 'from indains...',
  },
  {
    id: 33,
    imageUrl:
      'https://th.bing.com/th/id/OIP.i0-u0Z-UbMZ5XQdX2lJTVAHaKT?rs=1&pid=ImgDetMain',
    text: 'BollyWood Central',
    music: 'Bollywood central jab',
    singer: 'baje toh seedha...',
  },
  {
    id: 34,
    imageUrl:
      'https://th.bing.com/th/id/OIP.2DrTRXXBENVNmUMmPG1TcgHaHa?rs=1&pid=ImgDetMain',
    text: 'Tollywood perls',
    music: 'The finest set of',
    singer: 'Telugu Music...,',
  },
  {
    id: 35,
    imageUrl: 'https://c.saavncdn.com/editorial/logo/Rap91_20190502104007.jpg',
    text: 'Rap 91',
    music: 'Indias Rap Scene',
    singer: 'Mc-stan',
  },
]

const episodes = [
  {
    id: 36,
    imageUrl:
      'https://th.bing.com/th/id/OIP.tra4yRp2BSh8066jg7yp7AHaMM?rs=1&pid=ImgDetMain',
    text: 'How to stop...',
    music: 'Apr 2023',
  },
  {
    id: 37,
    imageUrl:
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/205800887/original/e26f73bcb6be9d4ff925fec16df8b06530fc9c55/create-promotional-infographics-posters-episode-posters.png',
    text: 'I can make it',
    music: 'Jun 27',
  },
  {
    id: 38,
    imageUrl:
      'https://th.bing.com/th/id/OIP.ttEIgDw4KRzYhHJYviIBmQHaHa?rs=1&pid=ImgDetMain',
    text: 'Jare Jahai Acha',
    music: 'Aug 2020',
  },
  {
    id: 39,
    imageUrl:
      'https://th.bing.com/th/id/OIP.q2CC_Yuz-MiijNd8SGKq5QHaLI?w=1065&h=1600&rs=1&pid=ImgDetMain',
    text: 'INSULT',
    music: 'jan 2020',
  },
  {
    id: 40,
    imageUrl:
      'https://th.bing.com/th/id/OIP.WDiY6TorA6cpTi5SCjKuaQAAAA?rs=1&pid=ImgDetMain',
    text: 'Break The Limits',
    music: 'jan 2023',
  },
]

const All = () => (
  <div className="all-container">
    <ul className="songs-list-container">
      {songsList.map(each => (
        <Songs songsList={each} key={each.id} />
      ))}
    </ul>
    <ul className="daily-mix">
      <h1>Made for srinu</h1>
      {madeforList.map(each => (
        <AllbumItems albumList={each} key={each.id} />
      ))}
    </ul>
    <ul>
      <h1>Jump Back In</h1>
      {jumpBackin.map(each => (
        <AllbumItems albumList={each} key={each.id} />
      ))}
    </ul>
    <ul>
      <h1>Recently Played</h1>
      {recentlyPlayed.map(each => (
        <AlbumLists albumList={each} key={each.id} />
      ))}
    </ul>
    <ul>
      <h1>Popular Albums</h1>
      {popularAlbums.map(each => (
        <AlbumLists albumList={each} key={each.id} />
      ))}
    </ul>
    <ul>
      <h1>indias Best</h1>
      {indiasBest.map(each => (
        <AllbumItems albumList={each} key={each.id} />
      ))}
    </ul>
    <ul>
      <h1>Episode for you</h1>
      {episodes.map(each => (
        <AlbumLists albumList={each} key={each.id} />
      ))}
    </ul>
    <br />
    <Footer />
  </div>
)

export default All
