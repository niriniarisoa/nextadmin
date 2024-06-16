import styles from './card.module.css';
import { MdSupervisedUserCircle } from 'react-icons/md';

const TransactionsCard = ({ totalCount }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Transactions</span>
        <span className={styles.number}>{totalCount}</span>
        <span><span className={styles.positive}>12%</span> than previous week</span>
      </div>
    </div>
  );
};

export default TransactionsCard;