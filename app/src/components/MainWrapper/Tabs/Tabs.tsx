import { TabsHolder } from './TabHolder/TabsHolder'
import styles from './tabs.module.scss'
import cosmo1 from '../../../images/cosmo1.png'
import cosmo2 from '../../../images/cosmo2.png'
import cosmo3 from '../../../images/cosmo3.png'
import cosmo4 from '../../../images/cosmo4.png'

type Posts = {
    id: number
    date: string
    title: string
    description: string
    image: string
}

export const Tabs = () => {
    const items = ["All", "My favorites", "Popular"]
    const posts: Posts[] = [
        {
            id: 1,
            date: 'April 20, 2023',
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            description: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
            image: cosmo1
        },
        {
            id: 2,
            date: 'April 21, 2023',
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            description: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
            image: cosmo2
        },
        {
            id: 3,
            date: 'April 23, 2023',
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            description: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
            image: cosmo3
        },
        {
            id: 4,
            date: 'April 25, 2023',
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            description: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
            image: cosmo4
        }
    ]

    return (
        <div className={styles.tabs}>
            <TabsHolder items={items} posts={posts}/>
        </div>
    )
}
