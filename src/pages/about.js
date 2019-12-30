import React, { Component } from 'react'

import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import config from '../../site-config'
import '../utils/fontawesome'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About Me • ${config.siteTitle}`} />
        <article>
          <header className="page-header">
            <h1>About me</h1>
          </header>
          <div className="page">
            <p>
              My name is <strong>Mohammad Aji Subarkah</strong>, a software
              developer. Was born at Situbondo, Indonesia from my parents. I'm
              currently work on bachelor's degree in Informatics Engineering on
              Artificial Intelligence also became a Laboratory Assistant
              Programming Language at{' '}
              <a
                href="https://itats.ac.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                Institut Teknologi Adhi Tama Surabaya
              </a>
              .
            </p>
            <p>
              I started to learn programming since 2015. Starting from{' '}
              <a
                href="https://www.java.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Java
              </a>{' '}
              programming language with{' '}
              <a
                href="https://netbeans.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NetBeans IDE
              </a>
              . From desktop change over to website, i'm create Queuing System
              in two clinics at{' '}
              <a
                href="https://rumahsakit.unair.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Universitas Airlangga
              </a>{' '}
              and Task Management System at{' '}
              <a
                href="https://pjbservices.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                PJB Services
              </a>
              .
            </p>
            <p>
              Outside programming universe, I love playing game{' '}
              <a
                href="https://www.leagueoflegends.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                League Of Legends
              </a>
              ,{' '}
              <a
                href="https://www.pointblank.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Point Blank
              </a>{' '}
              and any mobile games. Also like listening Pop Music especially Ed
              Sheeran and Electronic Dance Music.
            </p>
            <p>• • •</p>
          </div>
        </article>
      </Layout>
    )
  }
}
