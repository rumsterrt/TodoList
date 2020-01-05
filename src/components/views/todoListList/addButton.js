import React from 'react'
import styled from 'styled-components'
import symbols from 'styles/svg/symbols.svg'
import { Button } from 'components/ui'

const AddButtonStyled = styled(Button)`
    flex: 0 0 auto;
    height: 100%;
    width: calc(100% / 3 - 20px / 3);
    background-color: white;
    border-radius: 5px;
    text-align: center;
    font-size: 30px;

    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    &:not(:last-child) {
        margin-right: 20px;
    }

    &:hover {
        box-shadow: none;

        svg {
            fill: #d0469f;
        }
    }

    svg {
        fill: #ffa69e;

        transition: 1.25s;
    }
`

const AddButton = () => {
    return (
        <AddButtonStyled>
            <svg width="50%" height="50%">
                <use xlinkHref={symbols + '#add_button'} />
            </svg>
        </AddButtonStyled>
    )
}

export default AddButton
