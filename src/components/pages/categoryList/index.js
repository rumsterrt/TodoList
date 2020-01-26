import React, { useCallback, Fragment, useState } from 'react'
import styled from 'styled-components'
import TodoListPreview from './categoryPreview'
import AddButton from './addButton'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from 'actions/category'
import { InfiniteScroll, Loader, SearchInput } from 'components/ui'
import _get from 'lodash/get'

const CategoryListStyled = styled(InfiniteScroll)`
    flex: 1 0 0;
    padding: 20px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
`

const CategoryList = () => {
    const dispatch = useDispatch()
    const lists = useSelector(state => _get(state, 'category.nodes', {}))

    const loadMore = useCallback(() => {
        dispatch(getCategories({ offset: _get(lists, 'items.length', 0), limit: 4, filter: lists.filter }))
    }, [dispatch, lists])

    const updateFilter = useCallback(
        filter => {
            dispatch(getCategories({ offset: 0, limit: 4, filter }))
        },
        [dispatch],
    )

    if (lists.error) {
        return null
    }

    return (
        <Fragment>
            <SearchInput initText={lists.filter} placeholder={'Input search'} onChange={updateFilter} />
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
        </Fragment>
    )
}

export default CategoryList
