import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from 'components/ui'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import _get from 'lodash/get'
import { theme } from 'styles/theme'

const PreviewStyled = styled.div`
    flex: 0 0 min(400px, 100%);
    background-color: white;
    border-radius: 5px;
    background: ${({ percent }) =>
        `linear-gradient(to right, ${theme.bg.default} 0%, ${theme.bg.border} ${percent}%, ${theme.bg.reverse} ${percent}%)`};
    text-align: center;
    font-size: 30px;

    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    &:not(:last-child) {
        margin-right: 20px;
    }
    padding: ${({ padding }) => padding + 'px'};
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const getTextColor = ({ containerWidth, containerPercent, containerPadding, elemMarginLeft = 0 }) => {
    const percentWidth = (containerWidth * containerPercent) / 100 - containerPadding - elemMarginLeft, //real container percent width in px
        textContWidth = containerWidth - 2 * containerPadding - elemMarginLeft, // text container width exclude padding
        textPercent = Math.max(percentWidth / textContWidth, 0) * 100 //text percent width

    return `linear-gradient(to right, ${theme.bg.reverse} ${textPercent}%, ${theme.bg.border} ${textPercent}%)`
}

const CategoryPreview = ({ id, padding = 20 }) => {
    const data = useSelector(state => _get(state, `category.items.${id}`, {}))

    const [containerWidth, setContainerWidth] = useState(0)
    const history = useHistory()

    if (!data) {
        return null
    }

    const percent = data.totalTodos > 0 ? parseInt((data.completeTodos / data.totalTodos) * 100) : 0

    const textCommon = { containerWidth, containerPercent: percent, containerPadding: padding }

    return (
        <PreviewStyled
            ref={refElem => {
                if (refElem) {
                    setContainerWidth(refElem.getBoundingClientRect().width)
                }
            }}
            percent={percent}
            padding={padding}
            onClick={() => history.push(`/categories/${data.id}`)}
        >
            <Text gradientColor={getTextColor(textCommon)} flex="1 0 0">{`${data.totalTodos} Task`}</Text>
            <Text gradientColor={getTextColor(textCommon)} fontSize="100px" textAlign="center" flex="3 0 0">
                {percent + '%'}
            </Text>
            <Text gradientColor={getTextColor(textCommon)} fontSize="30px" flex="1 0 0">
                {data.name}
            </Text>
        </PreviewStyled>
    )
}

export default CategoryPreview
