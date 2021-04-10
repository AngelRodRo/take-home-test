import React from 'react'
import Card from '@material-ui/core/Card'

import { Commit } from '../models/commit';

function CommitCard(props: Commit) {
    const { sha, committer, message } = props

    return (
        <Card>
            {sha}
            {committer.avatar_url}
            {committer.url}
            {message}
        </Card>
    )
}

export default CommitCard
