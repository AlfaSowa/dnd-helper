import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from '../../header';

export const PageWrapper = () => {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>

      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};
