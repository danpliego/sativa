import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const TiendaPage = ({ data }) => (
  <Layout>
    <h1>Products</h1>
    <ul>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyId}>
          <h3>
            <Link to={`/tienda/${node.handle}`}>{node.title}</Link>
            {" - "}${node.priceRangeV2.minVariantPrice.amount}
          </h3>
          {node.images.originalSrc}
          <p>{node.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)
export default TiendaPage

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          images {
            originalSrc
          }
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`
