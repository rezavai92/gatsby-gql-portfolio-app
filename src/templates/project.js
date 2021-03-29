import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
export default function Project({data}) {
    return (
        <Layout>
             <div className ="container" >
            <h1>{data.markdownRemark.frontmatter.title} </h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
        </Layout>
    )
}


export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
