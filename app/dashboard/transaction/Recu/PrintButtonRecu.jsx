'use client';

import React from 'react';
import styles from "@/app/ui/dashboard/paperasse/reci.module.css";

const PrintButtonRecu = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className={`${styles.button} ${styles['no-print']}`} onClick={handlePrint}>
      Print Reçu
    </button>
  );
};

export default PrintButtonRecu;
