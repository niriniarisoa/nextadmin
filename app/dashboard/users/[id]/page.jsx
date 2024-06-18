import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fecthUser } from "@/app/libs/data";
import { updateUser } from "@/app/libs/actions";

const SingleUserPage = async ({params}) => {
  const {id} = params;
  const user = await fecthUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={user.image || "/noavatar.png"} alt="" fill />
        </div>
      {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder= {user.username} />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder= {user.email}
          />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder= {user.phone}/>
          <label>Adresse</label>
          <input type="text" name="address" placeholder= {user.address} />
          <label>Departement</label>
          <input type="text" name="departement" placeholder={user.departement} />
          <label>Admin?</label>
          <select name="titre" id="titre">
            <option value={false} selected>
              Admin?
            </option>
            <option value={true} selected={user.titre}>Oui</option>
            <option value={false} selected= {!user.titre}>Non</option>
          </select>
          <label>Actif?</label>
          <select name="status" id="status">
            <option value={true} selected>
              Active?
            </option>
            <option value={true} selected={user.status}>Oui</option>
            <option value={false} selected={user.status}>Non</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};
export default SingleUserPage;
