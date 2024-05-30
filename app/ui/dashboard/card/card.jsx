import styles from './card.module.css'
import {MdSupervisedUserCircle} from 'react-icons/md'

const Card = () =>{
    return(
        <div className={styles.container}>card
            <MdSupervisedUserCircle size={24}/>
            <div className={styles.texts}>
                <span className={styles.title}>Total Users</span>
                <span className={styles.number}>10.273</span>
                <span> <span className={styles.positive}>12%</span> than previous week</span>
            </div> 
        </div>
    )
}

export default Card