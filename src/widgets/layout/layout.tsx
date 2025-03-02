import { Layout as LayoutAntd } from 'antd';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <LayoutAntd style={{ minHeight: '100vh' }}>
      <Outlet />
    </LayoutAntd>
  );
};
