import React from 'react'
import { graphql } from 'gatsby'
import ProductForm from '../../components/ProductForm/ProductForm'
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import Layout from "../../components/layout"


const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <Layout pageInfo={{ pageName: "index" }}>
    <Container>
      <Row className="justify-content-md-center">
          <Col>
          </Col>
          <Col>
        {product.images.map(x => (
          <Img
            fluid={x.localFile.childImageSharp.fluid}
            key={x.id}
            alt={product.title}
          />
        ))}
        <h1>{product.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        <ProductForm product={product} />
        </Col>
        <Col>
          </Col>
      </Row>
    </Container >
    </Layout>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage