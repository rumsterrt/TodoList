import React from 'react'
import styled, { css } from 'styled-components'
import symbols from 'styles/svg'

const Button = styled.button`
    position: relative;
    text-align: center;
    overflow: hidden;
    background-color: transparent;
    border: none;
    height: 36px;
    width: ${props => props.width || 'max-content'};
    cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
    padding: 0 5px;

    & svg {
        width: ${({ svgIcon = {} }) => svgIcon.width || '100%'};
        height: ${({ svgIcon = {} }) => svgIcon.height || '100%'};
        margin-right: ${props => (props.hasChild ? '10px' : '0')};
        position: relative;
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

export default ({ symbol, ...props }) => {
    const SvgIcon = symbols[symbol]

    if (!SvgIcon) {
        return <div />
    }

    return (
        <Button {...props}>
            <SvgIcon />
        </Button>
    )
}
