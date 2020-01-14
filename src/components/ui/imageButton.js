import React from 'react'
import styled, { css } from 'styled-components'
import symbols from 'styles/svg/symbols.svg'

const Button = styled.button`
    text-align: center;
    overflow: hidden;
    background-color: transparent;
    border: none;
    height: 36px;
    width: ${props => props.width || 'max-content'};
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
    padding: '0 5px';

    svg {
        fill: #ffa69e;
        transition: 0.25s;
    }

    ${props =>
        !props.disabled &&
        css`
            &:hover {
                svg {
                    fill: #d0469f;
                }
            }

            &:focus {
                outline: none;
            }
        `}
`

export default ({ symbol, ...props }) => (
    <Button {...props}>
        <svg width="100%" height="100%">
            <use xlinkHref={symbols + '#' + symbol} />
        </svg>
    </Button>
)
