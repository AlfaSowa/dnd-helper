import { Layout as LayoutAntd } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <LayoutAntd style={{ minHeight: '100vh' }}>
      <LayoutAntd>
        <Content className='flex flex-auto'>
          <Outlet />
        </Content>
      </LayoutAntd>
    </LayoutAntd>
  );
};
