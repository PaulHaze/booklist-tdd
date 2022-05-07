import { Routes, Route } from 'react-router-dom';

import { Home, BookDetails } from 'pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:id" element={<BookDetails />} />
    </Routes>
  );
}
