import React, { Component } from 'react'

import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import config from '../../site-config'
import '../utils/fontawesome'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About Me - ${config.siteTitle}`} />
        <article>
          <header className="page-header">
            <h1>About me</h1>
          </header>
          <div className="page">
            My name Mohammad Aji Subarkah, a software developer.
          </div>
        </article>
      </Layout>
    )
  }
}
