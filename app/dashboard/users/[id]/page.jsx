import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Mumu Mu
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Mumu Mu" />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="mumuniarisoa@gmail.com"
          />
          <label>Password</label>
          <input type="password" name="password" placeholder="" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder="0333453111" />
          <label>Adresse</label>
          <input type="text" name="address" placeholder="adresse" />
          <label>Departement</label>
          <input type="text" name="departement" placeholder="departement" />
          <label>Admin?</label>
          <select name="titre" id="titre">
            <option value={false} selected>
              Admin?
            </option>
            <option value={true}>Oui</option>
            <option value={false}>Non</option>
          </select>
          <label>Actif?</label>
          <select name="status" id="status">
            <option value={true} selected>
              Active?
            </option>
            <option value={true}>Oui</option>
            <option value={false}>Non</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};
export default SingleUserPage;
