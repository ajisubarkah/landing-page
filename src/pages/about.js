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
            <h1>Tentang saya</h1>
          </header>
          <div className="page">
            <p>
              Namaku <strong>Mohammad Aji Subarkah</strong> panggil saja Aji. Lahir dari kedua orang tua saya di Situbondo, Indonesia. Sekarang sedang
              menempuh pendidikan sarjana di Teknik Informatika tentang Artificial Intelligence.
            </p>
            <p>
              Awal mempelajari pemrograman sejak tahun 2015, diawali dari bahasa pemrograman Java kemudian website dan sekarang sedang berfokus untuk
              mempelajari Android dan iOS.
            </p>
            <p>
              Diluar ngoding dan kawan-kawannya, hobinya bermain game League Of Legends, Point Blank dan game smartphone mulai dari MOBA analog hingga
              FPS analog. Suka mendengarkan musik Pop dan EDM yang cocok menemani disaat ngoding.
            </p>
            <p>• • •</p>
            <h3>Knowledge Base</h3>
            <div className="flex w-md-80">
              <div className="row">
                <h5>Frontend</h5>
                <ul>
                  <li>Bootstrap</li>
                  <li>VueJS</li>
                  <li>GatsbyJS</li>
                </ul>
              </div>
              <div className="row">
                <h5>Backend</h5>
                <ul>
                  <li>Laravel</li>
                  <li>CodeIgniter</li>
                  <li>NodeJS</li>
                  <li>Docker</li>
                  <li>MySQL / MariaDB</li>
                  <li>Oracle</li>
                </ul>
              </div>
              <div className="row">
                <h5>Bahasa</h5>
                <ul>
                  <li>Java / Kotlin</li>
                  <li>HTML&CSS</li>
                  <li>JavaSript</li>
                  <li>Python</li>
                  <li>Visual Basic</li>
                </ul>
              </div>
              <div className="row">
                <h5>Peralatan</h5>
                <ul>
                  <li>VS Code</li>
                  <li>Android Studio</li>
                  <li>DataGrip</li>
                  <li>PyCharm</li>
                  <li>Insomnia</li>
                  <li>Sketch</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    )
  }
}
