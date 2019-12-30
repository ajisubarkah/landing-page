import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Navigation from './Navigation'
import config from '../../site-config'
import favicon from '../images/favicon.png'
import Footer from './Footer'
import '../style/main.scss'

export default class MainLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Navigation menuLinks={config.menuLinks} />
        <main id="main-content">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </>
    )
  }
}
