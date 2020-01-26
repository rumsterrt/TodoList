import React from 'react'
import { Formik, Form } from 'formik'
import { InputField, Card, CardItem, Button } from 'components/ui'
import * as Yup from 'yup'

const CategorySchema = () =>
    Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short!')
            .required('Required'),
    })

const EditForm = ({ category, onSubmit }) => {
    const formik = {
        initialValues: {
            name: category.name || '',
            description: category.description || '',
        },
        onSubmit,
        validationSchema: CategorySchema,
        enableReinitialize: true,
    }

    return (
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
    )
}

export default EditForm
