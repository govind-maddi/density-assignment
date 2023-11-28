import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Hero from './Hero'
import Herogrid from './Herogrid'
import Mobileinfo from './Mobileinfo'
import Advantage from './Advantage'

function Layout() {

  const data = useStaticQuery(graphql`
  query MyQuery {
    file(relativePath: {eq: "organiserplanning.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
  `)

  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <div>
        <Navbar/>
        <div>
          <Hero/>
          <Herogrid/>
          <Mobileinfo/>
          <Advantage/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout;