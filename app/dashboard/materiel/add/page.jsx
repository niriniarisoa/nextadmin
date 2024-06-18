import { addmaterial } from "@/app/libs/actions";
import styles from "@/app/ui/dashboard/materials/addProduct/addProduct.module.css";

const AddMaterial = async() => {
  return (
    <div className={styles.container}>
      <form action={addmaterial} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="meuble">Catégorie</option>
          <option value="meuble">meuble</option>
          <option value="appareil">appareil</option>
          <option value="branchement">Branchement</option>
          <option value="installation">installation</option>
        </select>
        <input type="text" name="depart" placeholder="departement" />
        <select name="stock" id="stock">
          <option value={false} selected>En stock?</option> 
          <option value={true}>oui</option>
          <option value={false}>non</option>
        </select>
        <input type="text" name="stat" placeholder="Etat" />
        <input type="text" name="location" placeholder="lieu" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddMaterial;
