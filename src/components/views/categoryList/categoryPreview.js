import React, { useState } from 'react'
import styled from 'styled-components'
import { Text } from 'components/ui'
import { useHistory } from 'react-router-dom'

const PreviewStyled = styled.div`
    flex: 0 0 auto;
    width: calc(100% / 3 - 20px / 3);
    background-color: white;
    border-radius: 5px;
    background: ${({ percent }) => `linear-gradient(to right, #ffa69e 0%, #d0469f ${percent}%, white ${percent}%)`};
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

    return `linear-gradient(to right, white ${textPercent}%, #d0469f ${textPercent}%)`
}

const CategoryPreview = ({ data, totalTasks = 10, doneTasks = 6, padding = 20 }) => {
    const percent = parseInt((doneTasks / totalTasks) * 100),
        [containerWidth, setContainerWidth] = useState(0),
        history = useHistory()

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
            <Text gradientColor={getTextColor(textCommon)} flex="1 0 0">{`${totalTasks} Task`}</Text>
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
