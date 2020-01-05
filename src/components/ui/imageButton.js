import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.div`
    cursor: pointer;
    width: auto;
    display: flex;
    align-items: center;
    flex-direction: ${props => (props.imageFirst ? 'row-reverse' : 'row')};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    & img,
    div {
        margin-right: ${props => (props.title && props.imageFirst ? '5px' : 0)};
        width: 36px;
        height: 36px;
        ${props =>
            props.rounded &&
            css`
                border-radius: 36px;
            `};
    }
    & div {
        background-color: #0065f5;
    }
    & span {
        color: rgba(0, 0, 0, 0.87);
        font-size: 14px;
        font-weight: 400;
        margin-right: ${props => (!props.imageFirst ? '5px' : 0)};
    }
`

export default ({ title, src, alt, ...rest }) => (
    <StyledButton title={title} {...rest}>
        {title && <span>{title}</span>}
        {src ? <img src={src} alt={alt || ''} /> : <div />}
    </StyledButton>
)
