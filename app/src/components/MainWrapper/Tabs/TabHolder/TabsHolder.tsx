import { useState } from 'react'
import styles from './tabs-holder.module.scss'
import { TabContent } from '../TabContent/TabContent';


export const TabsHolder = ({ items }: { items: string[] }) => {
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
            {
                items.map((item, index) => (
                        <button
                        className={`${styles.tabs_holder__button} ${index === active ? styles.active : ''}`}
                        onClick={openTab}
                        data-index={index}
                        key={index}>{item}</button>
                ))
            }
            <TabContent data_type={active}/>
        </div>
        
    )
}
