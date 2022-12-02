import { Levels } from '../../helpers/imc'
import styles from './GridItem.module.css'
import imageUp from '../../assets/up.png'
import imageDown from '../../assets/down.png'

type Props = {
    item: Levels;
}

export const GridItem = ({item}:Props) => {
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? imageUp : imageDown} alt="" width={30} />
            </div>
            <div className={styles.gridTitle}>
                <h3>{item.title}</h3>
            </div>
            {
                item.yourImc &&
                <p className={styles.yourImc}>Seu IMC é de {item.yourImc.toFixed(2)} kg/m²</p>
            }
            <div className={styles.gridInfo}>
                <p>IMC está entre <strong>{item.imc[0]}</strong> e  <strong>{item.imc[1]}</strong></p>
            </div>
        </div>
    )
}