import React from 'react'
import styled, { css } from 'styled-components'

const Card = styled.div`
    border-radius: 2px;
    background-color: #ffffff;
    padding: ${props => props.padding || '32px 25px 48px 24px'};
    position: relative;
    margin-bottom: 16px;

    .label {
        position: absolute;
        top: 16px;
        right: 14px;
        color: #5c97eb;
        font-size: 12px;
        font-weight: 400;

        &.necessary {
            color: #d0469f;
        }
    }
    & > *:not(:last-child) {
        margin-bottom: 23px;
    }
`

export default ({ isNecessary, noLabel, children, ...props }) => (
    <Card {...props}>
        {!noLabel &&
            (isNecessary ? (
                <div className="label necessary">Обязательно</div>
            ) : (
                <div className="label">Не обязательно</div>
            ))}
        {children}
    </Card>
)

export const RowBlock = css`
    display: flex;
    flex-direction: ${props => props.type || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'flex-start'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    width: ${props => props.contentWidth || '100%'};
    & > * {
        ${props =>
            props.itemsWidth !== 'auto' &&
            css`
                width: ${props => (props.itemsWidth || props.wrap ? 'auto' : '100%')};
            `};
        &:not(:last-child) {
            margin-right: ${props => (props.type !== 'column' || props.wrap === 'wrap' ? '10px' : '0')};
            margin-bottom: ${props => (props.type !== 'column' && props.wrap !== 'wrap' ? '0' : '10px')};
        }
    }
`

export const CardItem = styled.div`
    width: ${props => (props.width ? props.width + ' !important' : '100%')};
    & > label,
    > p,
    > h3 {
        color: #ffa69e;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 10px;
        position: relative;
        ${props =>
            props.isNecessary &&
            css`
                &:after {
                    content: '*';
                    position: absolute;
                    color: #e986c6;
                }
            `};
    }
    & > p {
        font-weight: normal;
    }
    & > div {
        ${RowBlock};
    }
`

export const CardRowBlock = styled.div`
    ${RowBlock};
`

export const CardError = styled.p`
    color: #d0469f;
    font-size: 12px;
    font-weight: 400;
    margin: 8px 0 0 10px;
`

export const CardHint = styled.div`
    position: relative;
    color: rgba(0, 0, 0, 0.87);
    font-size: 12px;
    font-weight: 400;
    margin-top: 20px;
    flex: 1 1 100%;
    padding-left: 10px;
    &::before {
        content: '*';
        position: absolute;
        left: 0;
        color: #e986c6;
    }
`
