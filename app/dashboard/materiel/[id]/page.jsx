import { updateMateriel } from "@/app/libs/actions";
import { fetchMaterial} from "@/app/libs/data";
import styles from "@/app/ui/dashboard/materials/singleMaterial/singleMaterial.module.css";
import Image from "next/image";

const SingleMaterialPage = async ({params}) => {
const {id} = params;
  const material = await fetchMaterial(id);
  
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src={material.image || "/noproduct.jpg"} alt="" fill />
        </div>
        {material.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateMateriel} className={styles.form}>
        <input type="hidden" name="id" value={material.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={material.title}/>
          <label>Departement</label>
          <input type="number" name="depart" placeholder={material.depart}/>
          <label>Etat</label>
          <input type="stock" name="stat" placeholder={material.stat} />
          <label>Localisation</label>
          <input type="nombre" name="location" placeholder={material.location} />
          <label>Categorie</label>
          <select name="cat" id="cat">
            <option value={material.cat}>Catégorie</option>
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
