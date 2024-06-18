import { connectToDB } from "@/app/libs/utils";
import { updateTransaction } from "@/app/libs/actions";
import styles from "@/app/ui/dashboard/transactions/singleTransaction/singleTransaction.module.css";
import { fetchTransaction, fetchMaterialsAndUsers } from "@/app/libs/data";

const fetchTransactionDetails = async (id) => {
  await connectToDB();
  const transaction = await fetchTransaction(id);
  return transaction;
};

const UpdateTransaction = ({ transaction, materials = [], users = [] }) => {
  return (
    <div className={styles.container}>
    <form action={updateTransaction} className={styles.form}>
      <input type="hidden" name="id" value={transaction._id.toString()} />
      
      <label className={styles.label}>Material</label>
      <select className={styles.select} name="materialId" defaultValue={transaction.materialId._id.toString()} required>
        <option value="">Select Material</option>
        {materials.length > 0 ? (
          materials.map((material) => (
            <option key={material._id.toString()} value={material._id.toString()}>
              {material.title}
            </option>
          ))
        ) : (
          <option disabled>Loading materials...</option>
        )}
      </select>
      
      <label className={styles.label}>User</label>
      <select className={styles.select} name="userId" defaultValue={transaction.userId._id.toString()} required>
        <option value="">Select User</option>
        {users.length > 0 ? (
          users.map((user) => (
            <option key={user._id.toString()} value={user._id.toString()}>
              {user.username}
            </option>
          ))
        ) : (
          <option disabled>Loading users...</option>
        )}
      </select>
      
      <label className={styles.label}>Type</label>
      <select className={styles.select} name="type" defaultValue={transaction.type} required>
        <option value="in">Entrée</option>
        <option value="out">Sortie</option>
      </select>
      
      <label className={styles.label}>Quantity</label>
      <input className={styles.input} type="number" placeholder="Quantity" name="quantity" defaultValue={transaction.quantity} required />
      
      <button className={styles.button} type="submit">Submit</button>
    </form>
  </div>
);
};


const UpdateTransactionPage = async ({ params }) => {
  const { id } = params;
  const transaction = await fetchTransactionDetails(id);
  const { materials, users } = await fetchMaterialsAndUsers();

  return <UpdateTransaction transaction={transaction} materials={materials} users={users} />;
};

export default UpdateTransactionPage;
