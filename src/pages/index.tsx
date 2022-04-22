import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import { Layout } from '../components/Layout';

const Browse: FC = () => {
  const queryTitle = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `;

  const { site } = useStaticQuery(queryTitle);

  return (
    <Layout pageTitle={`${site.siteMetadata.title} | Browse`}>
      <p>Holaaaa</p>
    </Layout>
  );
};

export default Browse;
