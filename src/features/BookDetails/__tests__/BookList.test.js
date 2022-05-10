import React from 'react';
import { render } from '@testing-library/react';

import { BookDetails } from '../BookDetails';

describe('BookDetails', () => {
  const book = {
    id: 1,
    name: 'Refactoring',
    description: `
    Martin Fowler's Refactoring defined core ideas and techniques 
    that hundreds of thousands of developers have used to improve
    their software. 
    `,
  };
  it('should render the book title', () => {
    const { container } = render(<BookDetails book={book} />);
    const title = container.querySelector('.book-title');
    expect(title.innerHTML).toEqual(book.name);
  });
  it('should render the book description', () => {
    const { container } = render(<BookDetails book={book} />);
    const description = container.querySelector('.book-description');
    expect(description.innerHTML).toEqual(book.description);
  });
  it('should display the book title when no description is given', () => {
    const bookNoDesc = {
      id: 1,
      name: 'Refactoring',
    };
    const { container } = render(<BookDetails book={bookNoDesc} />);
    const description = container.querySelector('.book-description');
    expect(description.innerHTML).toEqual(book.name);
  });
  it('should show a "show more" link when description is over 300 characters', () => {
    const bookLongDesc = {
      id: 1,
      name: 'Refactoring',
      description: `Martin Fowler's Refactoring defined core ideas and Martin Fowler's Refactoring defined core ideas and Martin Fowler's Refactoring defined core ideas and Martin Fowler's Refactoring defined core ideas and Martin Fowler's Refactoring defined core ideas and Martin Fowler's Refactoring defined core ideas and `,
    };
    const { container } = render(<BookDetails book={bookLongDesc} />);
    const link = container.querySelector('button.show-more');
    const title = container.querySelector('p.book-description');

    expect(link.innerHTML).toEqual('Show More');
    expect(title.innerHTML).toEqual(
      `Martin Fowler's Refactoring defined core ideas and ...`,
    );
  });
});
