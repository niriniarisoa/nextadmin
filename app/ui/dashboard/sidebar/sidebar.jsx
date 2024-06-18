import styles from "./sidebar.module.css";
import { 
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdWork,
  MdOutlineSettings,
  MdHelpCenter,
} from 'react-icons/md';
import MenuLink from './menuLink/menuLink.jsx';
import Image from 'next/image';

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Utilisateurs",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Materiels",
        path: "/dashboard/materiel",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transaction",
        icon: <MdWork />,
      },
    ],
  },
  {
    title: "Parametre",
    list: [
      {
        title: "Parametre",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Aide",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/logo.png" alt="" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>Gestion Logistique de Materiel</span>
          <span className={styles.userTitle}>NG Academy</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
