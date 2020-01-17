import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: white;
`

const Header = styled.div`
    position: sticky;
    height: 64px;
    z-index: 2;
    background: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
`

const Body = styled.div`
    margin: 10px;
`

const Page = ({ header, children, className }) => {
    return (
        <Wrapper className={className}>
            <Header>{header}</Header>
            <Body>{children}</Body>
        </Wrapper>
    )
}

export default Page
