import React, { useEffect, useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import _throttle from 'lodash/throttle'

const List = styled.div`
    width: 100%;
    padding: 20px;

    display: flex;
    flex-direction: ${({ type }) => (type === 'vertical' ? 'column' : 'row')};
    flex-wrap: nowrap;
    overflow-x: auto;
`

const InfiniteScroll = ({
    throttle = 200,
    threshold = 100,
    onLoadMore,
    isLoading,
    hasMore,
    children,
    type = 'horizontal',
    className,
}) => {
    const sentinel = useRef()
    const parentNode = useRef()
    const [loadMore, setLoadMore] = useState(true)

    const checkWindowScroll = useCallback(() => {
        if (isLoading || !parentNode || !sentinel) {
            return
        }
        if (type === 'vertical') {
            const height = parentNode.current.getBoundingClientRect().height
            const top = sentinel.current.getBoundingClientRect().top

            if (hasMore && top && top - height < threshold) {
                onLoadMore()
            }

            return
        }
        const width = parentNode.current.getBoundingClientRect().width
        const left = sentinel.current.getBoundingClientRect().left

        if (hasMore && left && left - width < threshold) {
            onLoadMore()
        }
    }, [hasMore, isLoading, onLoadMore, threshold, type])

    useEffect(() => {
        if (!parentNode) {
            return
        }

        const scrollHandler = _throttle(() => setLoadMore(true), throttle)
        const resizeHandler = _throttle(() => setLoadMore(true), throttle)
        const current = parentNode.current

        current.addEventListener('scroll', scrollHandler)
        current.addEventListener('resize', resizeHandler)

        return () => {
            current.removeEventListener('scroll', scrollHandler)
            current.removeEventListener('resize', resizeHandler)
        }
    }, [parentNode, throttle])

    useEffect(() => {
        if (!loadMore) {
            return
        }
        checkWindowScroll()

        setLoadMore(false)
    }, [loadMore, checkWindowScroll])

    const sentinelDiv = <div ref={sentinel} />

    return (
        <List ref={parentNode} type={type} className={className}>
            {children}
            {sentinelDiv}
        </List>
    )
}

export default InfiniteScroll
