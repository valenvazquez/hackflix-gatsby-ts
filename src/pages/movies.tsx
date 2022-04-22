import React, { FC } from 'react';
import { Layout } from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';

const Movies: FC = () => {
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
    <Layout pageTitle={`${site.siteMetadata.title} | Movies`}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export default Movies;
