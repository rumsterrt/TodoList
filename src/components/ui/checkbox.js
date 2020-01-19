import React from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'

const Checkbox = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    height: 25px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    span {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

    &:hover input ~ span {
        background-color: #ccc;
    }

    input:checked ~ span {
        background-color: ${theme.bg.border};
    }

    span:after {
        content: '';
        position: absolute;
        display: none;
    }

    input:checked ~ span:after {
        display: block;
    }

    span:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`

export default ({
    backgroundColor = 'transparent',
    checked = false,
    onChange = () => {},
    title = '',
    color = '#73a3e4',
    name,
    spanColor,
    className,
    style,
}) => (
    <Checkbox color={color} backgroundColor={backgroundColor} spanColor={spanColor} className={className} style={style}>
        <input type="checkbox" name={name} checked={checked} onChange={e => onChange(e, !checked)} />
        <span>{title}</span>
    </Checkbox>
)
