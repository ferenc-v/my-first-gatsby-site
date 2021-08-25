import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
 
function BlogPage({data}) {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        {
                            <Link to={"/blog/" + node.slug}>{node.frontmatter.title}</Link>
                        }
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
            nodes {
              frontmatter {
                date(formatString: "DD-MM-YYYY")
                title
              }
              id
              slug
            }
        }
    }
`

export default BlogPage
