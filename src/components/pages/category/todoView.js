import React, { useCallback, useState, Fragment } from 'react'
import { Flex, Text, Checkbox, SvgButton, Input } from '../../ui'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { editTodo, removeTodo } from 'actions/todolist'

const StyledContainer = styled(Flex)`
    padding: 10px 0;
    &:not(:last-child) {
        margin-bottom: 5px;
    }
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`

const TodoView = ({ id, name, isDone, categoryId, onAddNew }) => {
    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)
    const [nameEdit, setNameEdit] = useState(name || '')

    const onChangeTodo = useCallback(
        fields => {
            dispatch(editTodo({ categoryId, id, ...fields }))
        },
        [dispatch, id, categoryId],
    )

    const onRemoveClick = useCallback(
        e => {
            e.stopPropagation()
            dispatch(removeTodo({ id, categoryId, isDone }))
        },
        [dispatch, id, categoryId, isDone],
    )

    const onSaveEdit = useCallback(() => {
        if (!nameEdit) {
            return
        }
        if (name === nameEdit) {
            setIsEdit(false)
            return
        }
        if (onAddNew) {
            onAddNew(nameEdit)
            return
        }
        onChangeTodo({ name: nameEdit })
        setIsEdit(false)
    }, [name, nameEdit, onChangeTodo, onAddNew])

    const onEditClick = useCallback(
        event => {
            event.stopPropagation()
            setIsEdit(true)
        },
        [setIsEdit],
    )

    return (
        <StyledContainer
            maxWidth
            align="center"
            onClick={!isEdit && !onAddNew ? onChangeTodo.bind(null, { isDone: !isDone }) : null}
        >
            {!isEdit && !onAddNew ? (
                <Fragment>
                    <Checkbox checked={isDone} />
                    <Text flex="1 0 0" textDecoration={isDone ? 'line-through' : undefined}>
                        {name}
                    </Text>
                    <SvgButton width="35px" symbol="edit_button" onClick={onEditClick} />
                    <SvgButton width="35px" symbol="delete_button" onClick={onRemoveClick} />
                </Fragment>
            ) : (
                <Fragment>
                    <Input
                        value={nameEdit}
                        placeholder={onAddNew ? 'Input new todo name' : ''}
                        onChange={event => {
                            setNameEdit(event.target.value)
                        }}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                onSaveEdit()
                            }
                        }}
                    />
                    <SvgButton width="35px" symbol="save_button" onClick={onSaveEdit} />
                </Fragment>
            )}
        </StyledContainer>
    )
}

export default TodoView
