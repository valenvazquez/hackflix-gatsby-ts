import { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Hackflix`,
    description: `A webpage where you can look up to your favourite movies. It was created in Hack Academy's coding bootcamp as my first React project.`,
    author: `Valentin Vazquez`,
    createdAt: 2021,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`src/images`),
      },
    },
    `gatsby-plugin-meta-redirect`,
  ],
};

export default config;
