import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => (
  <section>
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

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "logos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`