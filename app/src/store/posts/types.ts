import { Posts } from "../../components/MainWrapper/Tabs/TabContent/TabContent"

export type PostState = {
    amountPosts: Posts[]
    limit?: number
    //offset: number - not for API
    page?: number
}

export type PostAction = {
    type: string
    amountPosts: Posts[]
    page?: number
}