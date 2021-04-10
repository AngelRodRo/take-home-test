import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import LaunchIcon from '@material-ui/icons/Launch'

import Styled from 'styled-components'

import { Commit } from '../models/commit'

import Author from './author'

const StyledCard = Styled(Card)`
    max-width: 650px;
    width: 100%;
    margin: 10px 0;
    padding: 20px;
    position: relative;
`

const StyledLink = Styled(Link)`
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px !important;
`

const StyledInfo = Styled.div`
    margin: 10px;
`

function CommitCard(props: Commit) {
    const { sha, committer, commit, html_url } = props
    return (
        <StyledCard variant="outlined">
            <StyledInfo>
                <Typography variant="h6">
                    {commit.message}
                </Typography>
                <Typography variant="caption">
                    {sha}
                </Typography>
            </StyledInfo>
            <Author
                name={commit.author.name}
                avatar={committer.avatar_url}
                url={committer.html_url}
            />
            <StyledLink href={html_url}>
                <LaunchIcon />
            </StyledLink>
        </StyledCard>
    )
}

CommitCard.componentName = 'Commit'

export default CommitCard
