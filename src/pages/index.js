import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        /> 
      </Layout>
    </main>
  )
}

export default IndexPage
