import React from 'react'
import Styled from 'styled-components'

import Commit from './components/commit'

function App() {
  const commits = [{
    sha: 'asdas',
    message: 'asdasd',
    committer: {
      avatar_url: 'asdda',
      url: 'adssa'
    }
  }]

  const commitsList = commits.map(({ sha, message, committer }) => 
    <Commit
      sha={sha}
      message={message}
      committer={committer}
    />
  )

  const StyledList = Styled.div`
    display: flex;
    justify-content: center;
  `

  return (
    <StyledList>
      {commitsList}
    </StyledList>
  )
}

export default App
