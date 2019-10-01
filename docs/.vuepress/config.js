module.exports = {
  base: '/',
  title: 'iHopess',
  description: 'Vuepress blog demo',
  themeConfig: {
	// 你的GitHub仓库，请正确填写
	repo: 'https://github.com/xxxxxxx/blog-demo',
	// 自定义仓库链接文字。
	repoLabel: 'GitHub',
	nav: [
		{ text: 'Home', link: '/' },
		{ text: 'fx', link: '/blog/fx/' }
	],
	sidebarDepth: 2,
	lastUpdated: '最后更新于',
    sidebar: {
		'/blog/fx/': [
        '',        /* / */
        'fx1', /* /contact.html */
        'fx2'    /* /about.html */
      ]
	},
	//displayAllHeaders: true, // 默认值：false
	// 所有页面全部开启自动生成侧边栏
    //sidebar: 'auto'
  },
  plugins: [
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ]
}