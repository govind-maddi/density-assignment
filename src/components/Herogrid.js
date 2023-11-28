import { graphql, useStaticQuery } from 'gatsby';
import { getImage,GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'

function Herogrid() {

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
        <section>
            <header>00%</header>
            <header>Conversion fee</header>
        </section>
        <section>
            <header>500 Mn+</header>
            <header>Lifetime Volume Traded</header>
        </section>
        <section>
            <header>250+</header>
            <header>Total Tradable Pairs</header>
        </section>
        <section>
            <header>15,000+</header>
            <header>Traders</header>
        </section>
    </div>
  )
}

export default Herogrid;