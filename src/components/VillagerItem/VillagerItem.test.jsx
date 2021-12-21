import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VillagerItem from './VillagerItem';

describe('VillagerItem component', () => {
  afterEach(() => cleanup());
  it('renders VillagerItem', () => {
    const { asFragment } = render(<VillagerItem 
      imageUrl="https://placeCage.com/200/200"
      name="Sir Nick Cage"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
