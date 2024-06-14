import styles from "@/app/ui/dashboard/transactions/transactions.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchTransactions } from "@/app/libs/data";
import { deleteTransaction } from "@/app/libs/actions";

const TransactionsPage = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = parseInt(searchParams?.page, 10) || 1;
  
    // console.log("Fetching transactions with query:", q, "and page:", page);
  
    const { count, transactions } = await fetchTransactions(q, page);
  
    // console.log("Transactions:", transactions);
    // console.log("Total count:", count);
  
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a transaction..." />
          <Link href="/dashboard/transaction/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
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
                <td>{transaction.type === 'in' ? 'Entrée' : 'Sortie'}</td>
                <td>{transaction.quantity}</td>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/transactions/${transaction._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                    </Link>
                    <form action={deleteTransaction}>
                      <input type="hidden" name="id" value={transaction._id.toString()} />
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </form>
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
  
export default TransactionsPage;
