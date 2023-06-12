import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AppBar } from './AppBar/AppBar';
import { Container } from './UI/Container/Container.styled';

export const Layout = () => {
  return (
    <Container>
      <Helmet>
        <title>Phone Book</title>
      </Helmet>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
