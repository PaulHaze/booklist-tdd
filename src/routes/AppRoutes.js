import { Routes, Route } from 'react-router-dom';

import { Home, Test } from 'pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}
