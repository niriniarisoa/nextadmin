import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
import Image from 'next/image'

const Rightbar = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                  <Image src="/astronaut.png" alt="" fill className={styles.bg}/>  
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Disponible</span>
                    <h3 className={styles.title}>How to use the new version of admin dashboard</h3>
                    <span className={styles.subtitle}>Take 4 minutes to learn</span>
                    <p className={styles.description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem quod dolorum ducimus nulla? Atque! 
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>Disponible</span>
                    <h3 className={styles.title}>How to use the new version of admin dashboard</h3>
                    <span className={styles.subtitle}>Take 4 minutes to learn</span>
                    <p className={styles.description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem quod dolorum ducimus nulla? Atque! 
                    </p>
                    <button className={styles.button}>
                        <MdReadMore/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar