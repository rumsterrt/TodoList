import React, { useEffect } from 'react'
import styled from 'styled-components'
import TodoListPreview from './todoListPreview'
import AddButton from './addButton'
import { useSelector, useDispatch } from 'react-redux'
import { getCathegories } from 'actions/category'

const TodoListListStyled = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    padding: 20px;
`

const TodoListList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCathegories(0, 10))
    }, [dispatch])

    const lists = useSelector(state => state.category || {})

    return (
        <div>
            <TodoListListStyled>
                <AddButton />
                {lists.nodes.map((list, index) => (
                    <TodoListPreview
                        key={index}
                        totalTasks={100}
                        doneTasks={list.doneTasks}
                        name={list.name + ' ' + index}
                    />
                ))}
            </TodoListListStyled>
        </div>
    )
}

export default TodoListList
