import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

function AboutPage() {
    return (
        <main>
            <title>About Me</title>
            <Layout pageTitle="About Me">
                <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
                <StaticImage
                    alt="Doggo laying"
                    src="../images/dog.jpg"
                />
            </Layout>
        </main>
    )
}

export default AboutPage
