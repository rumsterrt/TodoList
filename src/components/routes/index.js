import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Category from './category'
import Auth from './auth'

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
    max-height: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
`

const App = () => {
    const { token } = useSelector(state => state.auth)
    const isAuth = !!token

    return (
        <Wrapper>
            <Container>
                {!isAuth ? (
                    <Switch>
                        <Route path="/auth" render={props => <Auth {...props} />} />
                        <Redirect to="/auth" />
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/categories" render={props => <Category {...props} />} />
                        <Redirect to="/categories" />
                    </Switch>
                )}
            </Container>
        </Wrapper>
    )
}

export default App
