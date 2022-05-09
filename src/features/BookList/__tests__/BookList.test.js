import React from 'react';
import { render } from '@testing-library/react';

import { BookList } from '../BookList';

describe('BookList', () => {
  it('renders loading when loading prop is true', () => {
    const { container } = render(<BookList loading />);
    const content = container.querySelector('p');
    expect(content.innerHTML).toContain('Loading');
  });
  it('renders errors when errors prop is true', () => {
    const { container } = render(<BookList hasErrors />);
    const content = container.querySelector('p');
    expect(content.innerHTML).toContain('Errors');
  });
  it('renders a list of books when books are passed as a prop', () => {
    const books = [
      {
        id: 1,
        name: 'Refactoring',
      },
      {
        id: 2,
        name: 'Domain-driven design',
      },
      {
        id: 3,
        name: 'Building Microservices',
      },
    ];
    const { container } = render(<BookList books={books} />);
    const titles = [...container.querySelectorAll('h2')].map(x => x.innerHTML);
    expect(titles).toEqual([
      'Refactoring',
      'Domain-driven design',
      'Building Microservices',
    ]);
  });
});

describe('BookDetails', () => {
  it('should render the book title', () => {
    const book = {
      id: 1,
      name: 'Refactoring',
    };
    const { container } = render();
  });
});
