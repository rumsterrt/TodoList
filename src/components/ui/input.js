import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'

const Input = styled.input`
    width: 100%;
    height: 38px;
    color: ${() => theme.text.default};
    border-radius: 2px;
    border: 1px solid ${props => (props.error ? theme.bg.error : theme.bg.default)};

    font-size: 14px;
    font-weight: 400;
    padding: 0 10px;
    transition: all 500ms;

    &:hover {
        border-color: ${props => (props.error ? theme.bg.error : theme.bg.alt)};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px 1px ${props => (props.error ? theme.bg.error : theme.bg.default)};
        border-color: ${props => (props.error ? theme.bg.error : theme.bg.alt)};
    }
    ${props =>
        props.readOnly &&
        css`
            border: none;
            background: ${() => theme.bg.wash};
        `}
`

export default ({ type = 'text', error = false, readOnly = false, ...props }) => {
    return <Input type={type} error={error} readOnly={readOnly} {...props} />
}
