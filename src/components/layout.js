/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" media="none" onload="this.media='all';" />
          <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" media="none" onload="this.media='all';" />
          <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap" rel="stylesheet" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer style={{background: `rebeccapurple`, padding: `25px`, color: `rgba(255,255,255,0.75)`}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" style={{ textDecoration: `none`, color: `white` }}>Gatsby</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
