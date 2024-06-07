import Link from "next/link";
import Image from "next/image";
import styles from "@/app/ui/dashboard/materials/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchMaterials } from "@/app/libs/data";
import { deletematerial } from "@/app/libs/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, materials } = await fetchMaterials(q, page);

  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a material..." />
        <Link href="/dashboard/materiel/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Libellé</td>
            <td>catégorie</td>
            <td>Departement</td>
            <td>Etat</td>
            <td>location</td>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>
                <div className={styles.material}>
                  <Image
                    src="/noproduct.jpg"
                    width={40}
                    height={40}
                    className={styles.materialImage}
                  />
                  {material.title}
                </div>
              </td>
              <td>{material.cat}</td>
              <td>{material.depart}</td>
              <td>{material.stat}</td>
              <td>{material.location}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/materiel/${material.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deletematerial}>
                    <input type="hidden" name="id" value={material.id}/>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
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

export default ProductsPage;
