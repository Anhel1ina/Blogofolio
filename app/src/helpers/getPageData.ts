import { Posts } from "../components/MainWrapper/Tabs/TabContent/TabContent"

export const getPageData = (page: number) => {
    const limit = page === 1 ? 11 : 12

    return {
        limit: limit
    }
}


export const getPageCount = (count: Posts[]) => {
    let countOfPages = 1
    let countArr: number[] = []
    if (count.length > 11) {
        countOfPages = Math.ceil((count.length - 11) / 12) + 1
        countArr = Array.from({ length: countOfPages }, (_, index) => index + 1)
        return countArr
    }
    return countArr
}