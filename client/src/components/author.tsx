import React from 'react'
import Styled from 'styled-components'

import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const StyledContainer = Styled.a`
    display: flex;
    align-items: center;
    margin: 10px 0;
`

interface Props {
    name: string,
    url: string,
    avatar: string,
}

function Author(props: Props) {
    const { url, avatar, name } = props

    return (
        <StyledContainer href={url}>
            <Avatar
                alt="Profile image"
                src={avatar}
            />
            <Typography
                style={{margin: "10px"}}
                variant="caption"
            >
                {name}
            </Typography>
        </StyledContainer>
    )
}

Author.displayName = 'Author'

export default Author
