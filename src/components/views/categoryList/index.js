import React, { useCallback } from 'react'
import styled from 'styled-components'
import TodoListPreview from './categoryPreview'
import AddButton from './addButton'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from 'actions/category'
import { InfiniteScroll, Loader } from 'components/ui'
import _get from 'lodash/get'

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
    const lists = useSelector(state => _get(state, 'category.nodes', {})),
        loadMore = useCallback(() => {
            dispatch(getCategories({ offset: _get(lists, 'items.length', 0), limit: 4 }))
        }, [dispatch, lists])

    if (lists.error) {
        return null
    }

    return (
        <CategoryListStyled
            throttle={100}
            threshold={300}
            onLoadMore={loadMore}
            hasMore={lists.hasMore}
            isLoading={lists.isLoading}
        >
            <AddButton />
            {lists.items.map(id => (
                <TodoListPreview key={id} totalTasks={100} id={id} />
            ))}
            {lists.isLoading && <Loader />}
        </CategoryListStyled>
    )
}

export default CategoryList
