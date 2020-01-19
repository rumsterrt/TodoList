import React, { useCallback } from 'react'
import styled from 'styled-components'
import TodoListPreview from './categoryPreview'
import AddButton from './addButton'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from 'actions/category'
import { InfiniteScroll } from 'components/ui'

const CategoryListStyled = styled(InfiniteScroll)`
    width: 100%;
    flex: 1 0 0;
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
        <CategoryListStyled
            throttle={100}
            threshold={300}
            onLoadMore={loadMore}
            hasMore={lists.hasMore}
            isLoading={lists.isLoading}
        >
            <AddButton />
            {lists.nodes.map(id => (
                <TodoListPreview key={id} totalTasks={100} id={id} />
            ))}
        </CategoryListStyled>
    )
}

export default CategoryList
