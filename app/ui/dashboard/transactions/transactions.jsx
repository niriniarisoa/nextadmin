import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () =>{
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/noavatar.png"
                            alt="sary"
                            width={30}
                            height={30}
                            className={styles.userImage}/>
                            Mumu MU
                            </div>
                        
                        </td>
                        <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td>21.03.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                           <div className={styles.user}>
                           <Image src="/noavatar.png"
                            alt="sary"
                            width={30}
                            height={30}
                            className={styles.userImage}/>
                            Mumu MU</div> 
                         
                        </td>
                        <td><span className={`${styles.status} ${styles.done}`}>Done</span></td>
                        <td>21.03.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                            <Image src="/noavatar.png"
                            alt="sary"
                            width={30}
                            height={30}
                            className={styles.userImage}/>
                            Mumu MU
                            </div>
                         
                        </td>
                        <td><span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
                        <td>21.03.2024</td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions