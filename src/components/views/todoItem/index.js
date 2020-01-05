import React from 'react'
import styled from 'styled-components'
import { Button, Input } from 'components/ui'

const TodoItem = styled.div`
    display: flex;
`

export default props => {
    const { todo } = props
    const [text, setText] = React.useState('')

    React.useEffect(() => {
        setText(todo.text)
    }, [todo.text])

    return (
        <TodoItem>
            <Input value={text} onChange={e => setText(e.targe.value)} />
            <Button onClick={() => {}}>Save</Button>
        </TodoItem>
    )
}
