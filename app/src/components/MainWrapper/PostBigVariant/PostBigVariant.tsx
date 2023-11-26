import styles from './post.module.scss'
import cosmo1 from '../../../images/cosmo1.png'
// import { LikeButton } from './LikeButton/LikeButton'
// import { DislikeButton } from './DislikeButton/DislikeButton'

export const PostBigVariant = () => {
    return (
        <div className={styles.post}>
            <div>
                <h4>April 20, 2023</h4>
                <h2>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h2>
                <p>Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.</p>
            </div>
            <div>
                <img src={cosmo1} alt="Astronaut" />
            </div>
            <div>
                {/* <div className={styles.like_buttons}>
                    <LikeButton/>
                </div>
                <div className={styles.like_buttons}>
                    <DislikeButton/>
                </div> */}
            </div>
        </div>
    )
}
