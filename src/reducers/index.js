import { combineReducers } from 'redux'
import todolist from './todolist'
import category from './category'

export default () => combineReducers({ todolist, category })
