import React, { ReactNode } from 'react';
import { Route } from 'react-router';
import { MainLayout } from './MainLayout';

interface PublicRouteData {
  exact?: boolean,
  path: string,
  component: ReactNode
}
function MainRoute({ component, ...rest }: PublicRouteData) {
  return (
    <Route
      {...rest}
      render={({ location }) => <MainLayout>{component}</MainLayout>}
    />
  );
}
export default MainRoute;
