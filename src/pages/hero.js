import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import HeaderImage from '../components/header-image';

export default ({ data }) => (
  <section>
        <HeaderImage />
    <Img
      fluid={data.file.childImageSharp.fluid}
      alt="This is a picture of my face."
    />
    <div>
      <h1>Hi, I like websites.</h1>
      <p>Sometimes I make them.</p>
    </div>
  </section>
)
