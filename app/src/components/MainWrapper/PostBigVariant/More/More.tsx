import { useDispatch, useSelector } from 'react-redux'
import { MoreIcon } from './MoreIcon'
import styles from './more.module.scss'
import { setCloseMoreAction, setOpenMoreAction } from '../../../../store/more/action'
import { AppState } from '../../../../store/store'
import { useMoreState } from '../../../../store/more/selectors'

type Props = {
    postId: string
}

export const More = ({postId}: Props) => {
    const moreState = useMoreState(postId)
    const {more} = moreState || {}

    const dispatch = useDispatch()
    const open = () => dispatch(setOpenMoreAction(postId))
    const close = () => dispatch(setCloseMoreAction(postId))
    return (
        <>
            <button onClick={more ? close : open} className={styles.more}>
                <MoreIcon/>
            </button>
        </>
    )
}
