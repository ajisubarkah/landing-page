import React, { Component } from 'react'

import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import config from '../../site-config'
import foto from '../images/profile.jpg'
import '../utils/fontawesome'

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`${config.siteTitle} - Software Developer`} />
        <div className="lead">
          <div className="elevator">
            <h1>{`Hello, I'm Aji `}</h1>
            <p>
              I'm a software developer from Situbondo, Indonesia. Working on{' '}
              <a
                href="https://rumahkode.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                rumahkode
              </a>{' '}
              and also{' '}
              <a
                href="https://www.linkedin.com/in/mohammad-aji-subarkah-7ab0a0135/"
                target="_blank"
                rel="noopener noreferrer"
              >
                freelance
              </a>{' '}
              web and android developer from home.
            </p>
            <div className="social-buttons">
              <GitHubButton
                href="https://github.com/ajisubarkah"
                data-size="large"
                data-show-count="true"
              >
                ajisubarkah
              </GitHubButton>
            </div>
          </div>
          <div className="newsletter-section">
            <img src={foto} className="newsletter-avatar" alt="subarkah" />
            <div>
              <h3>Get in touch</h3>
              <p>Web and Mobile Apps developer.</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
