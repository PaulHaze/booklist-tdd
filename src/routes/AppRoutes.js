import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages';

import { BookListContainer, BookDetailsContainer } from 'features';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<BookListContainer />} />
        <Route path="books/:id" element={<BookDetailsContainer />} />
      </Route>
    </Routes>
  );
}
