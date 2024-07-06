import {FaPlay} from 'react-icons/fa'
import {GiPreviousButton, GiNextButton} from 'react-icons/gi'
import {FaRepeat} from 'react-icons/fa6'
import {AiTwotonePlaySquare} from 'react-icons/ai'
import {PiMicrophoneStageBold} from 'react-icons/pi'
import {HiQueueList} from 'react-icons/hi2'
import {MdConnectedTv, MdCloseFullscreen} from 'react-icons/md'
import {VscUnmute} from 'react-icons/vsc'
import {CgMiniPlayer} from 'react-icons/cg'
import {TbArrowsShuffle2} from 'react-icons/tb'

import './index.css'

const Playsongs = () => (
  <div className="playsong-container">
    <div className="play-card">
      <img
        src="https://moviepazes.com/images/gallery/Manam%20Movie%20Posters/2posters.jpg"
        alt="play-audio"
      />
      <div>
        <h6>Chinni Chinni aslu</h6>
        <p>Shreya Gosal</p>
      </div>
    </div>
    <ul>
      <li>
        <TbArrowsShuffle2 />
      </li>
      <li>
        <GiPreviousButton />
      </li>
      <li>
        <FaPlay />
      </li>
      <li>
        <GiNextButton />
      </li>
      <li>
        <FaRepeat />
      </li>
    </ul>
    <ul>
      <li>
        <AiTwotonePlaySquare />
      </li>
      <li>
        <PiMicrophoneStageBold />
      </li>
      <li>
        <HiQueueList />
      </li>
      <li>
        <MdConnectedTv />
      </li>
      <li>
        <VscUnmute />
      </li>
      <li>
        <CgMiniPlayer />
      </li>
      <li>
        <MdCloseFullscreen />
      </li>
    </ul>
  </div>
)

export default Playsongs
