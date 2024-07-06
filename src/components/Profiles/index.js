import Side from '../Side'
import Searchheader from '../Searchheader'
import Profilelist from '../Profilelist'
import Footer from '../Footer'

import './index.css'

const profile = [
  {
    id: 150,
    imageUrl:
      'https://th.bing.com/th/id/OIP.I0Z_A88txnfUOrwd1kfwfQHaHa?rs=1&pid=ImgDetMain',
    text: 'JJ',
    music: 'Profile',
  },
  {
    id: 151,
    imageUrl:
      'https://th.bing.com/th/id/OIP.P6lr2z5yUBuvxdKr-ieE2QHaE7?rs=1&pid=ImgDetMain',
    text: 'AR Rehman',
    music: 'Artist',
  },
  {
    id: 152,
    imageUrl:
      'https://th.bing.com/th/id/OIP.sAftHfu4TDxC3T_fFEEMfgHaEK?rs=1&pid=ImgDetMain',
    text: 'Ed sheren',
    music: 'Artist',
  },
  {
    id: 153,
    imageUrl:
      'https://www.rollingstone.com/wp-content/uploads/2022/12/SZA-tracklist.jpg?w=1581&h=1054&crop=1',
    text: 'SZA',
    music: 'Artist',
  },
  {
    id: 154,
    imageUrl:
      'https://th.bing.com/th/id/OIP.BT0_QsB_H6D3tMEisuOsAQHaIr?w=1366&h=1600&rs=1&pid=ImgDetMain',
    text: 'Sebrenna Carpenter',
    music: 'Artist',
  },
  {
    id: 155,
    imageUrl:
      'https://groundreport.in/wp-content/uploads/2020/09/sp-balasubrahmanyam.jpg',
    text: 'S.P.BalaSubrymanum',
    music: 'Artist',
  },
  {
    id: 156,
    imageUrl:
      'https://th.bing.com/th/id/OIP.sAqA4s8J9zS7U_c6Qd5HTwHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain',
    text: 'Emiway Bantai',
    music: 'Artist',
  },

  {
    id: 157,
    imageUrl:
      'https://th.bing.com/th/id/OIP.dkcuezowEa2FQrV78tMwVQHaEK?rs=1&pid=ImgDetMain',
    text: 'Eminem',
    music: 'Artist',
  },
  {
    id: 158,
    imageUrl:
      'https://th.bing.com/th/id/OIP.1gNsqyqo1nqA4yEwHTop0gHaFL?rs=1&pid=ImgDetMain',
    text: 'Emraan hasmi',
    music: 'Artist',
  },
  {
    id: 159,
    imageUrl:
      'https://th.bing.com/th/id/OIP.91J6ohl0i1lxn73GRFOADQHaF5?rs=1&pid=ImgDetMain',
    text: 'enrique lglesias',
    music: 'Artist',
  },
  {
    id: 160,
    imageUrl:
      'https://th.bing.com/th/id/OIP.5P9wRCBaBZhHwf4mMGJWUQHaM_?w=730&h=1280&rs=1&pid=ImgDetMain',
    text: 'Belli Ellish',
    music: 'Artist',
  },
  {
    id: 161,
    imageUrl:
      'https://th.bing.com/th/id/OIP.yypsjxuWUo_kTJiE9vvL_AAAAA?rs=1&pid=ImgDetMain',
    text: 'Efy Music',
    music: 'Artist',
  },
  {
    id: 162,
    imageUrl:
      'https://th.bing.com/th/id/OIP.q6DhYjmCuNyDoi5rXq297wHaHa?rs=1&pid=ImgDetMain',
    text: 'Elley Duhe',
    music: 'Artist',
  },
  {
    id: 163,
    imageUrl:
      'https://yt3.ggpht.com/a/AATXAJzoneudxd-OK_09KiP5FFTjCuJ6kWB3IFyAgRxz=s900-c-k-c0xffffffff-no-rj-mo',
    text: 'Dany',
    music: 'Artist',
  },
  {
    id: 164,
    imageUrl:
      'https://0.soompi.io/wp-content/uploads/2019/11/26190836/exo-3.jpeg',
    text: 'Exo',
    music: 'Artist',
  },

  {
    id: 165,
    imageUrl:
      'https://th.bing.com/th/id/OIP.Vv0zuGTK9NfDAGx2bWvHYgHaEK?rs=1&pid=ImgDetMain',
    text: 'Morad',
    music: 'Artist',
  },
  {
    id: 166,
    imageUrl:
      'https://th.bing.com/th/id/OIP.68VduM1y5OKRdF00didTtwHaEI?w=310&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    text: 'Black Pink',
    music: 'Artist',
  },
  {
    id: 167,
    imageUrl:
      'https://th.bing.com/th/id/OIP.QEMd7rV-KjI9RGei1XFYGQHaLF?rs=1&pid=ImgDetMain',
    text: 'Easen chan',
    music: 'Artist',
  },
  {
    id: 168,
    imageUrl:
      'https://devanekambaram.com/wp-content/uploads/2021/01/20201010_224610-scaled.jpg',
    text: 'Devan Ekbrum',
    music: 'Artist',
  },
  {
    id: 169,
    imageUrl:
      'https://th.bing.com/th/id/OIP.krnSGU5RHyu2z15FFsiAzQHaEK?rs=1&pid=ImgDetMain',
    text: 'Sonu Nigum',
    music: 'Artist',
  },
  {
    id: 170,
    imageUrl:
      'https://www.billboard.com/wp-content/uploads/media/NF-rapper-press-photo-by-Jon_Taylor-Sweet-2017-billboard-1548.jpg?w=1024',
    text: 'NF',
    music: 'Artist',
  },
  {
    id: 171,
    imageUrl:
      'https://th.bing.com/th/id/OIP.SP9qVRb8KKGLPK9fUOkCEQHaJU?rs=1&pid=ImgDetMain',
    text: 'Ella Enderson',
    music: 'Artist',
  },
  {
    id: 172,
    imageUrl:
      'https://th.bing.com/th/id/OIP.Uy1fRNyOJHaFDKUw2_FlcwAAAA?rs=1&pid=ImgDetMain',
    text: 'Elliza Doolittle',
    music: 'Artist',
  },
  {
    id: 173,
    imageUrl:
      'https://th.bing.com/th/id/OIP.eKMFXk6tEK8La4yNCDIODAHaE8?rs=1&pid=ImgDetMain',
    text: 'Himesh Reshmiya',
    music: 'Artist',
  },
  {
    id: 174,
    imageUrl:
      'https://timesofindia.indiatimes.com/thumb/msid-53685247,imgsize-77092,width-800,height-600,resizemode-4/53685247.jpg',
    text: 'Arjhith Singh',
    music: 'Artist',
  },
  {
    id: 175,
    imageUrl:
      'https://th.bing.com/th/id/OIP.qHNjYbLwd_mHiNCIM3UvAwAAAA?rs=1&pid=ImgDetMain',
    text: 'Ex-habit',
    music: 'Artist',
  },

  {
    id: 176,
    imageUrl:
      'https://th.bing.com/th/id/OIP.OZaZAzawLKQb4ac-5jAvZAHaLG?w=801&h=1200&rs=1&pid=ImgDetMain',
    text: 'Emie',
    music: 'Artist',
  },
  {
    id: 177,
    imageUrl:
      'https://th.bing.com/th/id/OIP.ld64qQeb11fKo9PjyGJZlAHaKj?rs=1&pid=ImgDetMain',
    text: 'Justin Biber',
    music: 'Artist',
  },
  {
    id: 178,
    imageUrl:
      'https://th.bing.com/th/id/OIP.ftx_wnayyjauTP0-hZTM9QAAAA?w=200&h=200&rs=1&pid=ImgDetMain',
    text: 'AR.Rehman',
    music: 'Artist',
  },
  {
    id: 179,
    imageUrl:
      'https://th.bing.com/th/id/OIP.hQwSny-VIklJN2z7yxezvwHaHa?rs=1&pid=ImgDetMain',
    text: 'Anuridh',
    music: 'Aritst',
  },
  {
    id: 180,
    imageUrl:
      'https://th.bing.com/th/id/OIP.RLDcWRafnS1xgEX45ixxuwAAAA?w=400&h=400&rs=1&pid=ImgDetMain',
    text: 'Koti',
    music: 'Artist',
  },
]

const Profiles = () => (
  <div>
    <div className="home-lg-container">
      <Side />
      <div className="music-container">
        <Searchheader />
        <div className="profiles">
          <ul>
            {profile.map(each => (
              <Profilelist profileList={each} key={each.id} />
            ))}
          </ul>
          <Footer />
        </div>
      </div>
    </div>
  </div>
)

export default Profiles
