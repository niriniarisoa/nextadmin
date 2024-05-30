import styles from './footer.module.css'

const Footer = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.logo}>Mumu</div>
            <div className={styles.text}>&copy; <span>NIRINIARISOA Muriella</span> </div>
        </div>
    )
}
export default Footer