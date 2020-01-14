import React, { useCallback, useState, Fragment } from 'react'
import { Flex, Text, Checkbox, SvgButton, Input } from '../../ui'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { editTodo, removeTodo } from 'actions/todolist'

const StyledContainer = styled(Flex)`
    padding: 10px;
    &:not(:last-child) {
        margin-bottom: 5px;
    }
`

const TodoView = ({ id, name, is_done, list_id, onAddNew }) => {
    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)
    const [nameEdit, setNameEdit] = useState(name)

    const onChangeTodo = useCallback(
        fields => {
            dispatch(editTodo({ categoryId: list_id, id, ...fields }))
        },
        [dispatch, id, list_id],
    )

    const onRemoveClick = useCallback(() => {
        dispatch(removeTodo({ id, categoryId: list_id }))
    }, [dispatch, id, list_id])

    const onSaveEdit = useCallback(() => {
        if (name === nameEdit || !nameEdit) {
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

    return (
        <StyledContainer maxWidth align="center">
            <Checkbox checked={is_done} onChange={(e, checked) => onChangeTodo({ isDone: checked })} />
            {!isEdit && !onAddNew ? (
                <Fragment>
                    <Text flex="1 0 0" textDecoration={is_done ? 'line-through' : undefined}>
                        {name}
                    </Text>
                    <SvgButton width="35px" symbol="edit_button" onClick={() => setIsEdit(true)} />
                    <SvgButton width="35px" symbol="delete_button" onClick={onRemoveClick} />
                </Fragment>
            ) : (
                <Fragment>
                    <Input value={nameEdit} onChange={e => setNameEdit(e.target.value)} />
                    <SvgButton width="35px" symbol="save_button" onClick={onSaveEdit} />
                </Fragment>
            )}
        </StyledContainer>
    )
}

export default TodoView
