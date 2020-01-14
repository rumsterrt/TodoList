import React, { useCallback } from 'react'
import styled from 'styled-components'
import TodoListPreview from './categoryPreview'
import AddButton from './addButton'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from 'actions/category'
import InfiniteScroll from '../../ui/infinityList'

const CategoryListStyled = styled(InfiniteScroll)`
    width: 100%;
    height: 400px;
    padding: 20px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
`

const CategoryList = () => {
    const dispatch = useDispatch()
    const lists = useSelector(state => state.category || {}),
        loadMore = useCallback(() => {
            dispatch(getCategories({ offset: lists.nodes.length, limit: 4 }))
        }, [dispatch, lists])

    return (
        <div>
            <CategoryListStyled
                throttle={100}
                threshold={300}
                onLoadMore={loadMore}
                hasMore={lists.hasMore}
                isLoading={lists.isLoading}
            >
                <AddButton />
                {lists.nodes.map((list, index) => (
                    <TodoListPreview key={index} totalTasks={100} doneTasks={list.doneTasks} data={list} />
                ))}
            </CategoryListStyled>
        </div>
    )
}

export default CategoryList
