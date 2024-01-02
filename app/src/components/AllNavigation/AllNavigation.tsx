import React from 'react'
import { PrevPageButton } from '../PrevPageButton/PrevPageButton'
import { NextPageButton } from '../NextPageButton/NextPageButton'
import { BlogNavigation } from '../BlogNavigation/BlogNavigation'
import navStyles from '../MainWrapper/main.module.scss'
import { on } from 'events'

type Props = {
    page: number
    pages: number[]
    onPage: (page: number) => void
}

export const AllNavigation = ({page, pages, onPage}: Props) => {
    return (
        <div className={navStyles.nav}>
            <PrevPageButton onPage={onPage} disabled={page === 1 || !pages.length ? true : false}/>
            <BlogNavigation onPage={onPage} page={page} pages={pages}/>
            <NextPageButton onPage={onPage} disabled={page === pages.length || !pages.length ? true : false}/>
        </div>
    )
}
