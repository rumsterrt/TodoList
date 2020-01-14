import React from 'react'
import _ from 'lodash'
import { Field } from 'formik'
import styled from 'styled-components'

const Error = styled.p`
    color: #d0469f;
    font-size: 12px;
    font-weight: 400;
    margin: 8px 0 0 10px;
`

export default ({ style, name, render, className }) => {
    return (
        <Field name={name}>
            {({ field, form }) => {
                const hasError = _.get(form.touched, name) && _.get(form.errors, name)

                return (
                    <div style={style} className={className}>
                        {render({
                            field: {
                                ...field,
                                error: hasError,
                            },
                            form,
                        })}
                        {hasError && <Error>{_.get(form.errors, name)}</Error>}
                    </div>
                )
            }}
        </Field>
    )
}
