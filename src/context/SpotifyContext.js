import React from 'react'

const SongsContext = React.createContext({
  activeTabId: '/',
  changeTabId: () => {},
})

export default SongsContext
