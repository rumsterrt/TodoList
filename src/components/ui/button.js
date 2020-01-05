import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'

const Button = styled.button`
    text-align: center;
    overflow: hidden;
    color: ${() => theme.text.reverse};
    background-color: ${() => theme.bg.alt};
    border: 1px solid ${() => theme.bg.border};
    border-radius: 5px;
    height: 36px;
    width: ${props => props.width || 'max-content'};
    line-height: 34px;
    font-size: 14px;
    text-decoration: none;
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
    font-weight: 400;
    padding: '0 25px';
    transition: 0.25s;

    ${props =>
        !props.disabled &&
        css`
            &:hover {
                box-shadow: inset 0 0 0 2em ${() => theme.bg.default};
            }

            &:focus {
                outline: none;
            }
        `}
`

export default ({ children, ...props }) => <Button {...props}>{children}</Button>
