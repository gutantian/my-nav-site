// 网站配置文件
// 在这里编辑网站信息，格式为：
// {
//   name: "网站名称",
//   url: "网站地址",
//   desc: "网站描述",
//   icon: "可选的图标表情"
// }

const websites = {
  ai: [
     {
      name: "DeepSeek",
      url: "https://deepseek.com",
      desc: "国产顶级大模型，编程与推理能力出众",
      icon: "🐋"
    },
    {
      name: "ChatGPT",
      url: "https://chat.openai.com",
      desc: "OpenAI 出品的对话 AI，支持代码、写作、分析等多种任务",
      icon: "🤖"
    },
   
    {
      name: "Gemini",
      url: "https://gemini.google.com",
      desc: "Google 多模态 AI，与 Google 生态深度整合",
      icon: "✨"
    },
    {
      name: "Perplexity",
      url: "https://www.perplexity.ai",
      desc: "AI 搜索引擎，实时联网，结果带来源引用",
      icon: "🔍"
    },
    {
      name: "Midjourney",
      url: "https://www.midjourney.com",
      desc: "顶级 AI 图像生成，创意无限",
      icon: "🎨"
    },
   
  ],
  dev: [
    {
      name: "GitHub",
      url: "https://github.com",
      desc: "全球最大代码托管平台，开源生态核心",
      icon: "🐙"
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com",
      desc: "开发者问答社区，解决技术难题首选",
      icon: "📋"
    },
    {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org/zh-CN/",
      desc: "最权威的 Web 技术文档，前端必备",
      icon: "📖"
    },
    {
      name: "Vercel",
      url: "https://vercel.com",
      desc: "前端部署平台，Next.js 官方推荐",
      icon: "▲"
    },    
    
    {
      name: "CodePen",
      url: "https://codepen.io",
      desc: "在线前端代码演练场，灵感汇集地",
      icon: "🖊"
    }
  ],
  design: [
    {
      name: "Figma",
      url: "https://www.figma.com",
      desc: "协作 UI 设计工具，产品团队标配",
      icon: "🖌"
    },
    {
      name: "Unsplash",
      url: "https://unsplash.com",
      desc: "高质量免费商用图片，设计师必备",
      icon: "📷"
    },
    {
      name: "Iconify",
      url: "https://iconify.design",
      desc: "超过 20 万图标，统一接口调用",
      icon: "✦"
    },
    {
      name: "Coolors",
      url: "https://coolors.co",
      desc: "快速生成配色方案，颜色灵感利器",
      icon: "🎨"
    },
    {
      name: "阿里巴巴矢量图标库",
      url: "https://www.iconfont.cn",
      desc: "国内最大图标库，免费下载使用",
      icon: "🔤"
    }
  ],
  info: [
    {
      name: "36氪",
      url: "https://36kr.com",
      desc: "中文科技创投媒体，最新科技资讯",
      icon: "📰"
    },
    {
      name: "TechCrunch",
      url: "https://techcrunch.com",
      desc: "全球科技创业媒体，硅谷动态第一手",
      icon: "📡"
    },
    {
      name: "少数派",
      url: "https://sspai.com",
      desc: "专注效率与数字生活，高质量原创内容",
      icon: "⚡"
    },
    {
      name: "V2EX",
      url: "https://www.v2ex.com",
      desc: "程序员社区，技术讨论氛围浓厚",
      icon: "💬"
    },
    {
      name: "Hacker News",
      url: "https://news.ycombinator.com",
      desc: "YC 出品技术社区，信噪比极高",
      icon: "Y"
    }
  ],
  productivity: [
    {
      name: "Notion",
      url: "https://www.notion.so",
      desc: "全能知识管理工具，笔记 + 数据库 + 协作",
      icon: "📝"
    },
    {
      name: "Obsidian",
      url: "https://obsidian.md",
      desc: "本地优先笔记软件，双向链接打造知识图谱",
      icon: "💎"
    },
    {
      name: "Raycast",
      url: "https://www.raycast.com",
      desc: "Mac 效率启动器，极大提升工作流速度",
      icon: "🚀"
    },
    {
      name: "Linear",
      url: "https://linear.app",
      desc: "极速项目管理工具，开发团队最爱",
      icon: "📌"
    },
    {
      name: "Excalidraw",
      url: "https://excalidraw.com",
      desc: "手绘风格在线白板，架构图与流程图利器",
      icon: "✏️"
    }
  ],
  learn: [
    {
      name: "roadmap.sh",
      url: "https://roadmap.sh",
      desc: "各方向技术学习路线图，规划职业发展",
      icon: "🗺"
    },
    {
      name: "freeCodeCamp",
      url: "https://www.freecodecamp.org",
      desc: "免费编程学习平台，项目驱动教学",
      icon: "🏕"
    },
    {
      name: "CSS-Tricks",
      url: "https://css-tricks.com",
      desc: "CSS 前沿技巧与教程，前端进阶必读",
      icon: "🎀"
    },
    {
      name: "Fireship",
      url: "https://www.youtube.com/@Fireship",
      desc: "100 秒讲清一个技术概念，YouTube 神频道",
      icon: "▶"
    },
    {
      name: "哔哩哔哩",
      url: "https://www.bilibili.com",
      desc: "中文技术视频宝库，编程教程极其丰富",
      icon: "📺"
    }
  ]
};