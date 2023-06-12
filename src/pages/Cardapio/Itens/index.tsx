import { Item } from './Item'
import cardapio from './Itens.json';
import styles from './Itens.module.scss'

export const Itens = () => {
    return (
        <div className={styles.itens}>
            {cardapio.map(item => (
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}