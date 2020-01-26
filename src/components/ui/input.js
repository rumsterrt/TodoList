import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'
import FieldWithError from './fieldWithError'

const StyledInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    height: 38px;
    color: ${() => theme.text.default};
    border-radius: 2px;
    border: 1px solid ${props => (props.error ? theme.bg.error : theme.bg.default)};

    font-size: 14px;
    font-weight: 400;
    padding: 0 10px;
    transition: all 500ms;

    &:hover {
        border-color: ${props => (props.error ? theme.bg.error : theme.bg.border)};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px 1px ${props => (props.error ? theme.bg.error : theme.bg.default)};
        border-color: ${props => (props.error ? theme.bg.error : theme.bg.border)};
    }
    ${props =>
        props.readOnly &&
        css`
            border: none;
            background: ${() => theme.bg.wash};
        `};

    &::placeholder {
        opacity: 40%;
    }
`

const Input = ({ type = 'text', error = false, readOnly = false, ...props }) => {
    return <StyledInput type={type} error={error} readOnly={readOnly} {...props} />
}

export const InputField = ({ style, name, ...props }) => (
    <FieldWithError style={style} name={name} render={({ field }) => <Input {...field} {...props} />} />
)

export default Input
