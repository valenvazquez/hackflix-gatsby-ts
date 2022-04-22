import React, { FC } from 'react';
import { LayoutProps } from './Layout.types';
import { Navbar } from '../Navbar/index';
import { Container, GlobalStyles } from './Layout.styles';

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <GlobalStyles />
      <title>{pageTitle}</title>
      <Navbar />
      <Container mt={100}>{children}</Container>
    </>
  );
};

export default Layout;
