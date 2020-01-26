import React, { useEffect } from 'react'
import { SvgButton, Flex, Text, Page, Loader } from 'components/ui'
import { addCategory, editCategory, getCategory } from 'actions/category'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import _get from 'lodash/get'
import EditForm from './editForm'

const Category = ({ categoryId }) => {
    const dispatch = useDispatch(),
        history = useHistory()

    const category = useSelector(state => (!categoryId ? {} : _get(state, `category.items.${categoryId}`) || {}))

    const isLoading = useSelector(state => _get(state, `category.isLoading`))

    const handleSubmit = React.useCallback(
        values => {
            dispatch(categoryId ? editCategory({ ...values, id: categoryId }) : addCategory(values))
            history.goBack()
        },
        [categoryId, dispatch, history],
    )

    useEffect(() => {
        if (!categoryId) {
            return
        }

        dispatch(getCategory({ id: categoryId }))
    }, [categoryId, dispatch])

    return (
        <Page
            header={
                <Flex width="100%" height="100%" justify="space-between" align="center">
                    <SvgButton width="75px" symbol="back_button" onClick={() => history.push('/')} />
                    <Flex width="100%" height="100%" justify="center" align="center">
                        <Text fontSize="30px">{categoryId ? 'Edit Category' : 'New Category'}</Text>
                    </Flex>
                    <div style={{ width: '75px' }} />
                </Flex>
            }
        >
            <Text fontSize="25px" textAlign="center">
                {categoryId ? '' : 'Create new category for your tasks'}
            </Text>
            <EditForm category={category} onSubmit={handleSubmit} />
            {isLoading && <Loader fullSize />}
        </Page>
    )
}

export default Category
