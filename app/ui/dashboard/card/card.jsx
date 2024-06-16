import styles from './card.module.css';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = ({ totalCount }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Utilisateurs</span>
        <span className={styles.number}>{totalCount}</span>
      </div>
    </div>
  );
};

export default Card;
