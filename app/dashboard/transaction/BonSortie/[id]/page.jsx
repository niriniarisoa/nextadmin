import { connectToDB } from "@/app/libs/utils";
import { fetchTransaction } from "@/app/libs/data";
import styles from "@/app/ui/dashboard/paperasse/bonSortie.module.css";
import PrintButton from "@/app/dashboard/transaction/BonSortie/PrintButton"; // Assurez-vous que le chemin est correct

const fetchTransactionDetails = async (id) => {
  await connectToDB();
  const transaction = await fetchTransaction(id);
  return transaction;
};

const BonSortiePage = async ({ params }) => {
  const { id } = params;
  const transaction = await fetchTransactionDetails(id);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Bon de Sortie</h1>
      <p className={styles.paragraph}>Material: {transaction.materialId.title}</p>
      <p className={styles.paragraph}>User: {transaction.userId.username}</p>
      <p className={styles.paragraph}>Type: {transaction.type === "in" ? "Entrée" : "Sortie"}</p>
      <p className={styles.paragraph}>Date: {new Date(transaction.date).toLocaleDateString()}</p>
      <PrintButton />
    </div>
  );
};

export default BonSortiePage;
