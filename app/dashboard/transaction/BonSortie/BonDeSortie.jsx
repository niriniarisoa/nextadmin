// D:\projet\scolaire\nextadmin\app\dashboard\transaction\BonSortie\BonDeSortie.jsx
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styles from '@/app/ui/dashboard/paperasse/bonSortie.module.css';

const BonDeSortie = ({ transaction }) => {
  const handlePrint = async () => {
    const element = document.getElementById('bonDeSortie');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('BonDeSortie.pdf');
  };

  return (
    <div>
      <div id="bonDeSortie" className={styles.bonContainer}>
        <h1 className={styles.header}>Bon de Sortie</h1>
        <p className={styles.paragraph}>Materiel: {transaction.materialId.title}</p>
        <p className={styles.paragraph}>Utilisateur: {transaction.userId.username}</p>
        <p className={styles.paragraph}>Type: {transaction.type === 'in' ? 'Entrée' : 'Sortie'}</p>
        <p className={styles.paragraph}>Date: {new Date(transaction.date).toLocaleDateString()}</p>
      </div>
      <button onClick={handlePrint} className={styles.printButton}>Imprimer</button>
    </div>
  );
};

export default BonDeSortie;
