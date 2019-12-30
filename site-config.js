const config = {
  siteTitle: 'Aji Subarkah',
  siteUrl: 'https://subarkah.id',
  siteDescription: 'Hey, my name is Mohammad Aji Subarkah.',
  menuLinks: [
    {
      name: 'About',
      link: '/about/',
    },
    {
      name: 'Works',
      link: '/works/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
}

if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

module.exports = config
