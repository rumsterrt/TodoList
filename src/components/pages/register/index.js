import React from 'react'
import { Formik, Form } from 'formik'
import { Text, InputField, Card, CardItem, Button, Page, Loader, Flex } from 'components/ui'
import { register } from 'actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import _get from 'lodash/get'

const LoginSchema = () =>
    Yup.object().shape({
        email: Yup.string()
            .email()
            .required('Required'),
        password: Yup.string().required('Reqired'),
        confirmPassword: Yup.string()
            .required('Reqired')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    })

const Register = () => {
    const dispatch = useDispatch(),
        history = useHistory()

    const user = useSelector(state => _get(state, `auth`, {}))

    const formik = {
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: values => {
            dispatch(register(values))
            history.push('/auth')
        },
        validationSchema: LoginSchema,
        enableReinitialize: true,
    }

    return (
        <Page>
            <Text fontSize="25px" textAlign="center">
                Registration
            </Text>
            <Formik {...formik}>
                <Form>
                    <Card noLabel id="create-category">
                        <CardItem>
                            <h3>Email</h3>
                            <div>
                                <InputField name="email" type="text" />
                            </div>
                        </CardItem>
                        <CardItem>
                            <h3>Password</h3>
                            <div>
                                <InputField name="password" type="password" />
                            </div>
                        </CardItem>
                        <CardItem>
                            <h3>Repeat password</h3>
                            <div>
                                <InputField name="confirmPassword" type="password" />
                            </div>
                        </CardItem>
                        <Flex marginBetween="20px" align="center">
                            <Button type="submit">Submit</Button>
                            <Text fontSize="20px" onClick={() => history.push('/auth?stage=login')}>
                                Login
                            </Text>
                        </Flex>
                    </Card>
                </Form>
            </Formik>
            {user.isFetching && <Loader fullSize />}

            <Text textAlign="center">{user.error}</Text>
        </Page>
    )
}

export default Register
