import React from 'react';
import styles from './EmptyComponent.module.css';

function EmptyComponent(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>Раздел находится в разработке</div>
    </div>
  );
}

export default EmptyComponent;
