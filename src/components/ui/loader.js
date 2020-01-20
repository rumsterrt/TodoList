import React from 'react'
import styled, { keyframes } from 'styled-components'
import { theme } from 'styles/theme'

const LoaderKeys = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    
    transform: rotate(360deg);
  }
`

const StyledLoader = styled.div`
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid ${theme.loader};
    transform: translateZ(0);
    animation: ${LoaderKeys} 1.1s infinite linear;

    border-radius: 50%;
    width: 10em;
    height: 10em;
    &:after {
        border-radius: 50%;
        width: 10em;
        height: 10em;
    }
`

const StyledFullSizeWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: none;

    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.1);

    z-index: 800;
`

const StyledInlineWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Loader = ({ fullSize }) => {
    if (fullSize) {
        return (
            <StyledFullSizeWrapper>
                <center>
                    <StyledLoader fullSize />
                </center>
            </StyledFullSizeWrapper>
        )
    }

    return (
        <StyledInlineWrapper>
            <StyledLoader />
        </StyledInlineWrapper>
    )
}

export default Loader
