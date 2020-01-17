import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'
import FieldWithError from './fieldWithError'

const StyledInput = styled.input`
    width: 100%;
    height: 38px;
    color: ${() => theme.text.default};
    border-radius: 2px;
    border: 1px solid ${props => (props.error ? theme.bg.error : '#ffa69e')};

    font-size: 14px;
    font-weight: 400;
    padding: 0 10px;
    transition: all 500ms;

    &:hover {
        border-color: ${props => (props.error ? theme.bg.error : '#d0469f')};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px 1px ${props => (props.error ? theme.bg.error : '#ffa69e')};
        border-color: ${props => (props.error ? theme.bg.error : '#d0469f')};
    }
    ${props =>
        props.readOnly &&
        css`
            border: none;
            background: ${() => theme.bg.wash};
        `};

    &::placeholder {
        opacity: 10%;
    }
`

const Input = ({ type = 'text', error = false, readOnly = false, ...props }) => {
    return <StyledInput type={type} error={error} readOnly={readOnly} {...props} />
}

export const InputField = ({ style, name, ...props }) => (
    <FieldWithError style={style} name={name} render={({ field }) => <Input {...field} {...props} />} />
)

export default Input
