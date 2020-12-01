
const globalUrl = ''
module.exports = {
  title: '后台系统',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: false,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',

  devWithoutBackend: true,

  Meeting: {
    freeDraw: false
  },

  UI: {
    pageHeaderH: 50,
    tagsViewH: 34,
    tabsH: 55,
    pageFuncBarH: 40,
    filterBarH: 50,
    pageToolBarH: 32,

    leftSideWidth: 210,

    contentPaddingH: 30,
    contentPaddingW: 20,

  },

  BaseUrl: globalUrl
}
