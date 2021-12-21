import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VillagerList from './VillagerList';

describe('VillagerList component', () => {
  afterEach(() => cleanup());
  it('Renders a Villager List', () => {
    const { asFragment } = render(<VillagerList 
      villagers={[
        {
          name: 'Nicky Cage',
          imageUrl: 'https://placecage.com/200/200',
          _id: '28sjsh3jdjsh44444'
        },
        {
          name: 'Nicholas Cage',
          imageUrl: 'https://placecage.com/200/200',
          _id: 'jdjsuej23451jdj928'
        },
      ]}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
