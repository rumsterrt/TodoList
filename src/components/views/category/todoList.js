import React, { useCallback, useState, Fragment } from 'react'
import InfiniteScroll from '../../ui/infinityList'
import { getTodos, addTodo } from 'actions/todolist'
import { useDispatch, useSelector } from 'react-redux'
import TodoView from './todoView'
import styled from 'styled-components'
import { SvgButton } from 'components/ui'

const StyledInfiniteScroll = styled(InfiniteScroll)`
    box-sizing: border-box;
    height: 400px;
`

const TodoList = ({ categoryId }) => {
    const dispatch = useDispatch()

    const list = useSelector(state => state.todolist.categories[categoryId] || state.todolist.template)

    const loadMoreTodos = useCallback(() => {
        dispatch(getTodos({ categoryId, offset: list.nodes.length, limit: 1 }))
    }, [dispatch, categoryId, list])

    const [isAddNew, setIsAddNew] = useState(false)

    const onAddTodo = useCallback(
        name => {
            dispatch(addTodo({ name, categoryId }))
            setIsAddNew(false)
        },
        [dispatch, categoryId],
    )

    return (
        <Fragment>
            {isAddNew ? (
                <TodoView onAddNew={onAddTodo} />
            ) : (
                <SvgButton width="35px" symbol="add_button" onClick={() => setIsAddNew(true)} />
            )}

            <StyledInfiniteScroll
                type="vertical"
                throttle={100}
                threshold={300}
                onLoadMore={loadMoreTodos}
                hasMore={list.hasMore}
                isLoading={list.isLoading}
            >
                {list.nodes.map(node => (
                    <TodoView key={node.id} {...node} />
                ))}
            </StyledInfiniteScroll>
        </Fragment>
    )
}

export default TodoList
