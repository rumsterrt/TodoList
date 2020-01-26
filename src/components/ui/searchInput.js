import React, { useState, useCallback } from 'react'
import Input from './input'
const SearchInput = ({ initText, onChange, typeDelay = 1000, placeholder }) => {
    const [text, setText] = useState(initText || '')
    const [typeTimeout, setTypeTimeout] = useState(null)
    const onInputChange = useCallback(
        e => {
            if (typeTimeout) {
                clearTimeout(typeTimeout)
            }
            const currText = e.target.value
            setText(currText)
            setTypeTimeout(
                setTimeout(() => {
                    onChange && onChange(currText)
                }, typeDelay),
            )
        },
        [typeTimeout, typeDelay, onChange],
    )
    return <Input value={text} onChange={onInputChange} placeholder={placeholder} />
}

export default SearchInput
