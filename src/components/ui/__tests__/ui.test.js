import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchField } from '../SearchField';

describe('Search Box', () => {
  const props = {
    searchValue: '',
    setSearchValue: jest.fn(),
  };
  it('should render input', () => {
    const { container } = render(<SearchField {...props} />);
    const input = container.querySelector('input[type="text"]');
    userEvent.type(input, ' ');
    expect(props.setSearchValue).not.toHaveBeenCalled();
  });
});
