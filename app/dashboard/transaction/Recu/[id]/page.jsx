import { connectToDB } from "@/app/libs/utils";
import { fetchTransaction } from "@/app/libs/data";
import styles from "@/app/ui/dashboard/paperasse/reci.module.css";
import PrintButtonRecu from "@/app/dashboard/transaction/Recu/PrintButtonRecu";

const fetchTransactionDetails = async (id) => {
  await connectToDB();
  const transaction = await fetchTransaction(id);
  return transaction;
};

const RecuPage = async ({ params }) => {
  const { id } = params;
  const transaction = await fetchTransactionDetails(id);

  return (
    <div className={`${styles.container} ${styles['print-visible']}`}>
      <h1 className={styles.header}>Reçu</h1>
      <div className={styles.details}>
        <p className={styles.paragraph}>
          <span className={styles.label}>Materiel:</span>
          <span className={styles.value}>{transaction.materialId.title}</span>
        </p>
        <p className={styles.paragraph}>
          <span className={styles.label}>Utilisateur:</span>
          <span className={styles.value}>{transaction.userId.username}</span>
        </p>
        <p className={styles.paragraph}>
          <span className={styles.label}>Type:</span>
          <span className={styles.value}>{transaction.type === "in" ? "Entrée" : "Sortie"}</span>
        </p>
        <p className={styles.paragraph}>
          <span className={styles.label}>Date:</span>
          <span className={styles.value}>{new Date(transaction.date).toLocaleDateString()}</span>
        </p>
      </div>
      <PrintButtonRecu />
    </div>
  );
};

export default RecuPage;
