const Config = {
  appTitle: 'Laurel CMS',
  appTitleShort: 'LCMS',
  appIdModule: '1',
  appDescription: 'A System manager of content.',
  appThemeColor: '#287ab1',
  appBgColor: '#ffffff',
  appIcon: 'assets/app-icon.png',
  apiPath: 'https://jcmsresource.herokuapp.com/',
  pwa: 'https://github.com/bstavroulakis/vue-wordpress-pwa',
  endPoint: {
    auth: {
      obtainToken: 'auth/obtain_token/',
      refleshToken: 'auth/refresh_token'
    },
    setup: {
      modules: 'setup/module/',
      pages: 'setup/page/'
    }
  }
}

export default Config
