import { useState } from 'react'
import styles from './tabs-holder.module.scss'
import { TabContent } from '../TabContent/TabContent';


type Props = {
    items: string[]
}

export const TabsHolder = (props: Props) => {
    const {items} = props
    const [active, setActive] = useState<number>(0)
    const openTab = (e: React.MouseEvent<HTMLButtonElement>) => {
        const indexButton = e.currentTarget.dataset.index;
        if (indexButton) {
            const index = +indexButton;

            if (!isNaN(index)) {
                setActive(index);
            }
        }
    };
    return (
        <div className={styles.tabs_holder}>
            <div className={styles.tabs_links}>
            {
                items.map((item, index) => (
                    <button
                    className={`${styles.tabs_holder__button} ${index === active ? styles.active : ''}`}
                    onClick={openTab}
                    data-index={index}
                    key={index}>{item}</button>
                ))
            }
            </div>
            <TabContent data_type={active}/>
        </div>
        
    )
}
