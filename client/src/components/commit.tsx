import React from 'react'
import Card from '@material-ui/core/Card'
import Styled from 'styled-components'

import { Commit } from '../models/commit'

const StyledCard = Styled(Card)`
    max-width: 650px;
    width: 100%;
`

function CommitCard(props: Commit) {
    const { sha, committer, message } = props

    return (
        <StyledCard>
            {sha}
            {committer.avatar_url}
            {committer.url}
            {message}
        </StyledCard>
    )
}

export default CommitCard
