import { Outlet } from 'react-router-dom';

import { Wrapper } from 'components';

export function Home() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
