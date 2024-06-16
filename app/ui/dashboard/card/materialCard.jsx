'use client'; // Indique que ce composant est un composant client

import React, { useState, useEffect } from 'react';
import styles from './card.module.css';
import { MdInventory2 } from 'react-icons/md';
import { fetchMaterialCount } from "@/app/libs/data";

const MaterialCard = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getCount = async () => {
      console.log("Fetching material count...");
      const materialCount = await fetchMaterialCount();
      console.log("Material count fetched:", materialCount);
      setCount(materialCount);
    };

    getCount();
  }, []);

  return (
    <div className={styles.container}>
      <MdInventory2 size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Materials</span>
        <span className={styles.number}>{count}</span>
        <span> <span className={styles.positive}>N/A</span> than previous week</span>
      </div>
    </div>
  );
};

export default MaterialCard;
