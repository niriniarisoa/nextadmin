import { connectToDB } from "@/app/libs/utils";
import { addTransaction } from "@/app/libs/actions";
import styles from "@/app/ui/dashboard/transactions/addTransactions/addTransactions.module.css";
import { Material,User } from "@/app/libs/models";

const fetchMaterialsAndUsers = async () => {
  await connectToDB();

  const [materials, users] = await Promise.all([
    Material.find().exec(),
    User.find().exec()
  ]);

  return { materials, users };
};

const AddTransaction = ({ materials = [], users = [] }) => {
    return (
      <div className={styles.container}>
        <form action={addTransaction} className={styles.form}>
          <select name="materialId" required>
            <option value="">Select Material</option>
            {materials.length > 0 ? (
              materials.map(material => (
                <option key={material._id.toString()} value={material._id.toString()}> {/* Convertir en chaîne */}
                  {material.title}
                </option>
              ))
            ) : (
              <option disabled>Loading materials...</option>
            )}
          </select>
          <select name="userId" required>
            <option value="">Select User</option>
            {users.length > 0 ? (
              users.map(user => (
                <option key={user._id.toString()} value={user._id.toString()}> {/* Convertir en chaîne */}
                  {user.username}
                </option>
              ))
            ) : (
              <option disabled>Loading users...</option>
            )}
          </select>
          <select name="type" required>
            <option value="">Select Type</option>
            <option value="in">Entrée</option>
            <option value="out">Sortie</option>
          </select>
          <input type="number" placeholder="Quantity" name="quantity" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  

const AddTransactionPage = async () => {
  const { materials, users } = await fetchMaterialsAndUsers();

  return <AddTransaction materials={materials} users={users} />;
};

export default AddTransactionPage;
