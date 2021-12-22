import React from 'react';
import { render, screen } from '@testing-library/react';
import AllVillagers from './AllVillagers';

describe('AllVillagers component', () => {
  it('displays a loading screen at page load', () => {
    render(<AllVillagers />);

    screen.getByAltText('Loading');
  });

  it('displays a list of villagers', async() => {
    render(<AllVillagers />);

    const villagerList = await screen.findByTestId('villagers');
  });
});
