import React from 'react';
import { render, screen } from '@testing-library/react';
import AllVillagers from './AllVillagers';

describe('AllVillagers component', () => {
  it('displays a loading screen at page load', () => {
    render(<AllVillagers />);

    screen.getByAltText('Loading');

  });
});
