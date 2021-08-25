import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

function BlogPage({data}) {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
            <ul>
                {data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile(filter: {size: {lte: 10}}) {
            nodes {
                name
            }
        }
    }
`

export default BlogPage
