import React from 'react'
import styled from 'styled-components'
import Flex from './flex'
import Text from './text'

const StyledProgressBar = styled.div`
    height: 5px;
    flex: 1 0 0;

    position: relative;
    width: 100%;
    & span {
        display: block;
        width: ${({ percent }) => (percent || 0) + '%'};
        background-color: pink;
        transition: 0.25s;
        position: relative;
        overflow: hidden;

        height: 100%;
    }
`

const ProgressBar = ({ percent, className }) => {
    return (
        <Flex align="center" fullWidth>
            <StyledProgressBar percent={percent} className={className}>
                <span />
            </StyledProgressBar>

            <Text color={'pink'} marginLeft="10px">
                {percent + '%'}
            </Text>
        </Flex>
    )
}

export default ProgressBar
