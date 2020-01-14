import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'

const Button = styled.button`
    text-align: center;
    overflow: hidden;
    color: ${() => 'white'};
    background-color: ${() => '#ffa69e'};
    border: none;
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
                box-shadow: 0 0 1px 2px ${() => '#ffa69e'};
                color: #ffa69e;
                background-color: white;
            }

            &:focus {
                outline: none;
            }
        `}
`

export default ({ children, ...props }) => <Button {...props}>{children}</Button>
