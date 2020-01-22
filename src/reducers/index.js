import { combineReducers } from 'redux'
import todolist from './todolist'
import category from './category'
import auth from './auth'

export default () => combineReducers({ todolist, category, auth })
