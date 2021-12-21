import React from 'react';
import styles from './Loading.module.css';

const Loading = () => (
  <div className={styles.Loading}>
    <img 
      src="https://media0.giphy.com/media/VJCSpN9VaG7K4p3CUj/source.gif" 
      alt="Loading" 
    />
  </div>
);

export default Loading;
