import { fecthUser } from "@/app/libs/data";
import styles from "@/app/ui/dashboard/materials/singleMaterial/singleMaterial.module.css";
import Image from "next/image";

const SingleMaterialPage = async ({params}) => {
const {id} = params;
  const user = fecthUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="projecteur" />
          <label>Prix</label>
          <input type="number" name="prix" />
          <label>stock</label>
          <input type="stock" name="Stock" placeholder="" />
          <label>nombre</label>
          <input type="nombre" name="nombre" placeholder="01" />
          <label>Categorie</label>
          <select name="cat" id="cat">
            <option value="meuble">Catégorie</option>
            <option value="meuble">meuble</option>
            <option value="appareil">appareil</option>
            <option value="branchement">Branchement</option>
            <option value="installation">installation</option>
          </select>
          <label>Description</label>
          <textarea
            name="descri"
            id="descri"
            rows="16"
            placeholder="Description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};
export default SingleMaterialPage;
