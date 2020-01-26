import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import { SvgButton, Flex, Text, InputField, Card, CardItem, Button, Page, Loader } from 'components/ui'
import { addCategory, editCategory, getCategory } from 'actions/category'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import _get from 'lodash/get'

const CategorySchema = () =>
    Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short!')
            .required('Required'),
    })

const Category = ({ categoryId }) => {
    const dispatch = useDispatch(),
        history = useHistory()

    const category = useSelector(state => (!categoryId ? {} : _get(state, `category.items.${categoryId}`) || {}))

    const isLoading = useSelector(state => _get(state, `category.isLoading`))

    const formik = {
        initialValues: {
            name: category.name || '',
            description: category.description || '',
        },
        onSubmit: values => {
            dispatch(categoryId ? editCategory({ ...values, id: categoryId }) : addCategory(values))
            history.goBack()
        },
        validationSchema: CategorySchema,
        enableReinitialize: true,
    }

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
            <Formik {...formik}>
                <Form>
                    <Card noLabel id="create-category">
                        <CardItem>
                            <h3>Name</h3>
                            <div>
                                <InputField name="name" type="text" />
                            </div>
                        </CardItem>
                        <CardItem>
                            <h3>Description</h3>
                            <div>
                                <InputField name="description" type="text" />
                            </div>
                        </CardItem>
                        <Button type="submit">Submit</Button>
                    </Card>
                </Form>
            </Formik>
            {isLoading && <Loader fullSize />}
        </Page>
    )
}

export default Category
