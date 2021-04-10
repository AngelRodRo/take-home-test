import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

import Styled from 'styled-components'

import { Commit } from '../models/commit'

import Author from './author'

const StyledCard = Styled(Card)`
    max-width: 650px;
    width: 100%;
    margin: 10px 0;
    padding: 20px;
`

function CommitCard(props: Commit) {
    const { sha, committer, commit } = props
    return (
        <StyledCard>
            <Typography variant="h6">
                {commit.message}
            </Typography>
            <Author
                name={commit.author.name}
                avatar={committer.avatar_url}
                url={committer.html_url}
            />
        </StyledCard>
    )
}

CommitCard.componentName = 'Commit'

export default CommitCard
