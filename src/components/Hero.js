import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql,useStaticQuery } from 'gatsby';
import React from 'react'

function Hero() {

    const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: {eq: "heromobile.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    `)

    const image = getImage(data.file.childImageSharp.gatsbyImageData);


  return (
    <div>
        <header>It’s time to trade,<br/>the future.</header>
        <article>Trade BTC, ETH Futures with 125x leverage and earn rewards.</article>
        <GatsbyImage image={image} alt='demo_img' />
    </div>
  )
}

export default Hero;

