import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'

const Card = styled.div`
    border-radius: 2px;
    background-color: ${theme.bg.reverse};
    padding: ${props => props.padding || '32px 25px 48px 24px'};
    position: relative;
    margin-bottom: 16px;

    .label {
        position: absolute;
        top: 16px;
        right: 14px;
        color: ${theme.text.default};
        font-size: 12px;
        font-weight: 400;

        &.necessary {
            color: ${theme.bg.border};
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
        color: ${theme.bg.default};
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
                    color: ${theme.bg.border};
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
