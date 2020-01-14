import React, { useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { SvgButton, Flex, Text } from 'components/ui'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import _get from 'lodash/get'
import { removeCategory, getCategory } from 'actions/category'
import _isEmpty from 'lodash/isEmpty'
import TodoList from './todoList'

const Wrapper = styled.div`
    background: white;
`

const Header = styled.div`
    position: sticky;
    height: 64px;
    z-index: 2;
    background: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
`

const Category = ({ id }) => {
    const data = useSelector(state => _get(state, 'category.nodes').find(node => node.id === +id)) || {},
        history = useHistory(),
        dispatch = useDispatch()

    useEffect(() => {
        if (!_isEmpty(data)) {
            return
        }

        dispatch(getCategory({ id }))
    }, [id, data, dispatch])

    const deleteHandler = useCallback(() => {
        dispatch(removeCategory({ id }))
        history.push(`/categories`)
    }, [dispatch, id, history])

    return (
        <Wrapper>
            <Header>
                <Flex width="100%" height="100%" justify="space-between" align="center">
                    <SvgButton width="75px" symbol="back_button" onClick={() => history.push('/')} />
                    <Flex width="100%" height="100%" justify="flex-end" align="center">
                        <SvgButton
                            width="75px"
                            symbol="edit_button"
                            onClick={() => history.push(`/categories/${id}/edit`)}
                        />
                        <SvgButton width="75px" symbol="delete_button" onClick={deleteHandler} />
                    </Flex>
                </Flex>
            </Header>
            <Text fontSize="25px" textAlign="center">
                {data.name}
            </Text>
            <Text fontSize="20px" textAlign="center">
                {data.description}
            </Text>
            <TodoList categoryId={id} />
        </Wrapper>
    )
}

export default Category
