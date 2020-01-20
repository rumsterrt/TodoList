import React, { useEffect, useCallback } from 'react'
import { SvgButton, Flex, Text, ProgressBar, Page, Loader } from 'components/ui'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom'
import _get from 'lodash/get'
import { removeCategory, getCategory } from 'actions/category'
import _isEmpty from 'lodash/isEmpty'
import TodoList from './todoList'

const Category = ({ id }) => {
    const data = useSelector(state => _get(state, `category.items.${id}`, {}), shallowEqual),
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
        <Page
            header={
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
            }
        >
            <Text fontSize="30px" textAlign="center">
                {data.name}
            </Text>
            <Text fontSize="25px" textAlign="center">
                {data.description}
            </Text>
            <ProgressBar
                percent={data && data.totalTodos > 0 ? parseInt((data.completeTodos / data.totalTodos) * 100) : 0}
            />
            <TodoList categoryId={id} />
            {!data && <Loader fullSize />}
        </Page>
    )
}

export default Category
