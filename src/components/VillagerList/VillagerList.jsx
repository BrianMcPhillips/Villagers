import React from 'react';
import PropTypes from 'prop-types';
import VillagerItem from '../VillagerItem/VillagerItem';

const VillagerList = ({ villagers }) => {
  const villagerElements = villagers.map(villager => {
    <li key={villager._id}>
      <VillagerItem name={villager.name} imageUrl={villager.imageUrl} />
    </li>
  });

  return (
    <ul>
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
