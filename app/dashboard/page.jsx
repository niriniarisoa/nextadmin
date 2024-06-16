// D:\projet\scolaire\nextadmin\app\dashboard\page.jsx
import Card from "../ui/dashboard/card/card";
import MaterialCard from "../ui/dashboard/card/materialCard";
import TransactionCard from "../ui/dashboard/card/transactionCard";
import styles from "../ui/dashboard/dashboard.module.css";
import Chart from "../ui/dashboard/chart/chart";
import { fetchTotalMaterialsCount, fetchTotalUsersCount ,fetchTotaltransactionsCount } from "@/app/libs/data";

const DashboardPage = async () => {
  const totalMaterialsCount = await fetchTotalMaterialsCount();
  const totalUsersCount = await fetchTotalUsersCount();
  const totalTransactionsCount = await fetchTotaltransactionsCount();

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}> 
        <div className={styles.cards}>
          <MaterialCard totalCount={totalMaterialsCount} />
          <Card totalCount={totalUsersCount} />
          <TransactionCard totalCount={totalTransactionsCount} />
          {/* Ajoutez d'autres cartes ou composants nécessaires ici */}
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default DashboardPage;
