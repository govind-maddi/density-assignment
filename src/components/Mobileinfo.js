import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { getImage,GatsbyImage } from 'gatsby-plugin-image';

function Mobileinfo() {

    const data = useStaticQuery(graphql`
    query MyQuery {
      query1:file(relativePath: {eq: "mobileinfo1.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      query2:file(relativePath: {eq: "mobileinfo2.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      query3:file(relativePath: {eq: "mobileinfo3.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    `)

    const img1 = data.query1.file.childImageSharp.gatsbyImageData;
    const img2 = data.query2.file.childImageSharp.gatsbyImageData;
    const img3 = data.query3.file.childImageSharp.gatsbyImageData;

  return (
    <div>

    </div>
  )
}

export default Mobileinfo