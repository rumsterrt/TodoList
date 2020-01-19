import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'

export default styled.div`
    text-decoration: ${props => props.textDecoration || 'none'};;
    font-family: ${props => (!props.inherit ? 'inherit' : 'inherit')};
    color: ${props => props.color || (!props.inherit ? theme.bg.default : 'inherit')};
    font-size: ${props => props.fontSize || (!props.inherit ? '14px' : 'inherit')};
    font-weight: ${props => props.fontWeight || (!props.inherit ? 'normal' : 'inherit')};
    padding: ${props => props.padding || 0};
    padding-top: ${props => props.paddingTop || 0};
    padding-bottom: ${props => props.paddingBottom || 0};
    padding-right: ${props => props.paddingRight || 0};
    padding-left: ${props => props.paddingLeft || 0};
    margin: ${props => props.margin || 0};
    margin-top: ${props => props.marginTop || 0};
    margin-bottom: ${props => props.marginBottom || 0};
    margin-right: ${props => props.marginRight || 0};
    margin-left: ${props => props.marginLeft || 0};
    word-break: ${props => props.wordBreak || 'break-word'};
    text-align: ${props => props.textAlign || 'left'};
    text-decoration: ${props => props.textDecoration || 'none'};
    align-self: ${props => props.alignSelf || 'auto'};
    white-space: ${props => props.whiteSpace || 'normal'};
    ${props =>
        (props.onClick || props.to) &&
        css`
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        `};
    ${props =>
        props.inline &&
        css`
            display: inline;
        `};

    ${props =>
        props.flex &&
        css`
            flex: ${props => props.flex};
        `};
    ${props =>
        props.titled &&
        css`
            text-transform: uppercase;
        `}
    ${props =>
        props.subtitled &&
        css`
            font-weight: bold;
            text-transform: uppercase;
        `}
    ${props =>
        props.gradientColor &&
        css`
            background: ${props => props.gradientColor};
            background-image: ${props => props.gradientColor};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `};
    ${props =>
        props.color &&
        css`
            -webkit-text-fill-color: currentColor;
        `};
`
