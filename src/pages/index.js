import React, { Component } from 'react'

import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { ButtonLink, ButtonIcon } from '../components/Button'
import GitHubButton from 'react-github-btn'
import config from '../../site-config'
import Avatar from '../images/profile.png'
import '../utils/fontawesome'

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`${config.siteTitle} • Software Developer`} />
        <div className="lead">
          <div className="elevator">
            <h1>{`Yo, namaku Aji `}</h1>
            <p>
              Seorang software engineering dari Situbondo, Indonesia. Founder dari{' '}
              <ButtonLink to="https://rumahkode.id" target="_blank" text="rumahkode" /> dan juga sebagai{' '}
              <ButtonLink to="https://www.linkedin.com/in/mohammad-aji-subarkah-7ab0a0135/" target="_blank" text="frelancer" /> website, android dan
              iOS yang work from home.
            </p>
            <div className="social-buttons">
              <GitHubButton href="https://github.com/ajisubarkah" data-size="large" data-show-count="true">
                ajisubarkah
              </GitHubButton>
            </div>
          </div>
          <div className="newsletter-section">
            <img src={Avatar} className="newsletter-avatar" alt="subarkah" />
            <div>
              <h3 className="nowrap">Aji Subarkah</h3>
              <ButtonIcon to="call:+6285940900559" icon="call" />
              <ButtonIcon to="mailto:aji@subarkah.id" icon="email" />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
