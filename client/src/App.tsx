import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import Commit from './components/commit'

import { getCommits } from './api/index';

function App() {

  const [commits, setCommits] = useState([])

  useEffect(() => {
    getCommits().then((commits = []) => {
      setCommits(commits)
    })
  }, [])

  const commitsList = commits.map(({ sha, commit, committer, html_url }) => 
    <Commit
      key={sha}
      sha={sha}
      commit={commit}
      committer={committer}
      html_url={html_url}
    />
  )

  const StyledList = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const StyledContainer = Styled.div`
    background: #24a7d9;
    margin: 0;
    padding: 0;
  `

  return (
    <StyledContainer>
      <Typography variant="h1" align="center" style={{ padding: "10px 0" }}>
        Commits logs
      </Typography>
      <StyledList>
        {commitsList}
      </StyledList>
    </StyledContainer>
  )
}

export default App
