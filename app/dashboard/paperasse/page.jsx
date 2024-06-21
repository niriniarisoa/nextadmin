import styles from "@/app/ui/dashboard/paperasse/paperasse.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchTransactions } from "@/app/libs/data";

const PaperassePage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = parseInt(searchParams?.page, 10) || 1;

  const { count, transactions } = await fetchTransactions(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a transaction..." />
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Material</td>
            <td>User</td>
            <td>Type</td>
            <td>Quantity</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.materialId.title}</td>
              <td>{transaction.userId.username}</td>
              <td>{transaction.type === "in" ? "Entrée" : "Sortie"}</td>
              <td>{transaction.quantity}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/transaction/BonSortie/${transaction._id}`}>
                    <button className={`${styles.button} ${styles.bonDeSorti}`}>
                      Bon de Sorti
                    </button>
                  </Link>
                  <Link href={`/dashboard/transaction/Recu/${transaction._id}`}>
                    <button className={`${styles.button} ${styles.recu}`}>
                      Reçu
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default PaperassePage;
