import React from 'react';
import styles from './EmptyComponent.module.css';

function EmptyComponent(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card} style={{'backgroundImage': `url(${process.env.PUBLIC_URL}/images/empty.jpg)`}}>Раздел находится в разработке</div>
    </div>
  );
}

export default EmptyComponent;
