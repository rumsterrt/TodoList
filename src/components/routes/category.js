import React from 'react'
import Category from '../views/category'
import CategoryList from '../views/categoryList'
import EditCategory from '../views/forms/category'
import { Switch, Route } from 'react-router-dom'

export default props => {
    return (
        <Switch>
            <Route path="/categories" exact render={ownProps => <CategoryList {...ownProps} {...props} />} />
            <Route path="/categories/new" exact render={ownProps => <EditCategory {...ownProps} {...props} />} />
            <Route
                path="/categories/:id"
                exact
                render={ownProps => <Category {...ownProps} {...props} id={ownProps.match.params.id} />}
            />
            <Route
                path="/categories/:id/edit"
                exact
                render={ownProps => <EditCategory {...ownProps} {...props} categoryId={ownProps.match.params.id} />}
            />
        </Switch>
    )
}
