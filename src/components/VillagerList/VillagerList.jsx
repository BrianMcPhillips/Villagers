import React from 'react';
import PropTypes from 'prop-types';
import VillagerItem from '../VillagerItem/VillagerItem';
import styles from './VillagerList.module.css';

const VillagerList = ({ villagers }) => {
  const villagerElements = villagers.map(villager => {
    <li key={villager._id}>
      <VillagerItem {...villager} />
    </li>
  });

  return (
    <ul className={styles.List} data-testid="villagers">
      {villagerElements}
    </ul>
  );
};

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })).isRequired
};

export default VillagerList;
