import React from 'react';
import PropTypes from 'prop-types';
import styles from './VillagerItem.module.css';

const VillagerItem = ({ name, imageUrl }) => (
  <div className={styles.Villager}>
    <figure>
      <img src={imageUrl} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  </div>
);

VillagerItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default VillagerItem;
