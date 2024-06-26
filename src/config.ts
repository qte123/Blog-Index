/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "导航页",
    sites: [
      {
        title: "博客",
        url: "https://blog.tafleo.top",
        icon: "",
        color: "#0171CD",
      },
      {
        title: "聊天机器人",
        url: "https://chat.tafleo.top",
        icon: "",
        color: "#0171CD",
      },
      {
        title: "Next-Chat",
        url: "https://next.tafleo.top",
        icon: "",
        color: "#0171CD",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Cster-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.tafleo.top",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: null,
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "赣ICP备2024029771号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "Welcome, my friend!",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "我的首页",
    keywords: "我的首页",
    description: "我的首页",
  },
};

export default GLOBAL_CONFIG;
