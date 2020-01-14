import styled, { css } from 'styled-components'

export default styled.div`
    display: flex;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    box-sizing: ${props => props.wrap || 'border-box'};
    ${props =>
        props.flow &&
        css`
            flex-flow: ${props => props.flow};
        `};

    ${props =>
        props.flex &&
        css`
            flex: ${props => props.flex};
        `};

    ${props =>
        props.marginBetween &&
        css`
            & > *:not(:last-child) {
                margin-right: ${props => ((props.direction || 'row') === 'row' ? props.marginBetween : '0')};
                margin-bottom: ${props => ((props.direction || 'row') === 'row' ? '0' : props.marginBetween)};
            }
        `};

    ${props =>
        props.padding &&
        css`
            padding: ${props => props.padding};
        `};
    ${props =>
        props.paddingTop &&
        css`
            padding-top: ${props => props.paddingTop};
        `};

    ${props =>
        props.paddingBottom &&
        css`
            padding-bottom: ${props => props.paddingBottom};
        `};

    ${props =>
        props.paddingLeft &&
        css`
            padding-left: ${props => props.paddingLeft};
        `};

    ${props =>
        props.paddingRight &&
        css`
            padding-right: ${props => props.paddingRight};
        `};

    ${props =>
        props.margin &&
        css`
            margin: ${props => props.margin};
        `};
    ${props =>
        props.marginTop &&
        css`
            margin-top: ${props => props.marginTop};
        `};

    ${props =>
        props.marginBottom &&
        css`
            margin-bottom: ${props => props.marginBottom};
        `};

    ${props =>
        props.marginLeft &&
        css`
            margin-left: ${props => props.marginLeft};
        `};

    ${props =>
        props.marginRight &&
        css`
            margin-right: ${props => props.marginRight};
        `};

    ${props =>
        props.overflow &&
        css`
            overflow: ${props => props.overflow};
        `};
    ${props =>
        props.overflowX &&
        css`
            overflow-x: ${props => props.overflowX};
        `};
    ${props =>
        props.overflowY &&
        css`
            overflow-y: ${props => props.overflowY};
        `};
    ${props =>
        props.fullWidth &&
        css`
            width: '100%';
        `}
`
