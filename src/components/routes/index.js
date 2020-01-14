import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import Category from './category'

const Wrapper = styled.div`
    margin: 0 auto;
    position: relative;
    height: 100vh;
    width: 100%;
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1170px;
    }
`

const Container = styled.div`
    width: 100%;
    min-height: calc(100% - 64px);
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
`

const App = () => {
    return (
        <Wrapper>
            <Container>
                <Switch>
                    <Redirect from="/" exact to="/categories" />
                    <Route path="/categories" render={props => <Category {...props} />} />
                </Switch>
            </Container>
        </Wrapper>
    )
}

export default App
