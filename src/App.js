import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Search from './components/Search'
import Music from './components/Music'
import Podcast from './components/Podcast'
import Albums from './components/Albums'
import Artists from './components/Artists'
import Geners from './components/Geners'
import Playlist from './components/Playlist'
import Song from './components/Song'
import Profiles from './components/Profiles'
import Playsongs from './components/Plalysongs'
import Shows from './components/Shows'

import './App.css'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/Music" component={Music} />
        <Route exact path="/Podcast" component={Podcast} />
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/playlist" component={Playlist} />
        <Route exact path="/songs" component={Song} />
        <Route exact path="/playlist" component={Playlist} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/Geners&Moods" component={Geners} />
        <Route exact path="/podcast&shows" component={Shows} />
      </Switch>
    </BrowserRouter>
    <div>
      <Playsongs />
    </div>
  </div>
)

export default App
