'use client';

import React from 'react';
import styles from "@/app/ui/dashboard/paperasse/bonSortie.module.css";

const PrintButton = () => {
  return (
    <button className={styles.button} onClick={() => window.print()}>
      Print Bon de Sortie
    </button>
  );
};

export default PrintButton;
