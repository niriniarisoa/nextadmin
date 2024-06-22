'use client'; // Cela indique que ce composant est un Client Component

import { addUser } from "@/app/libs/actions";
import styles from "@/app/ui/dashboard/users/addUsers/addUsers.module.css";

const AddUserClient = () => {
  const handleKeyPress = (event) => {
    const charCode = event.charCode ? event.charCode : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="tel" placeholder="phone" name="phone" required onKeyPress={handleKeyPress} />
        <select name="titre" id="titre">
          <option value={false}>Admin?</option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <select name="status" id="status">
          <option value={true}>Active?</option>
          <option value={true}>Oui</option>
          <option value={false}>Non</option>
        </select>
        <input type="text" name="address" placeholder="Adresse" />
        <input type="text" name="departement" placeholder="Departement" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserClient;
