const CONFIG = {
  // profile setting (required)
  profile: {
    name: "ProDevOpsGuy",
    image: "/emoji/profile.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app

    //Random Image set
    isRandom: false,
    randomImage: "/emoji/profile", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    ext: ".png",
    maxNum: 6,

    role: "DevOps Engineer/Blogger",
    bio: "Free DevOps/Cloud World",
    email: "email@prodevopsguy.site",
    linkedin: "harshhaa-vardhan-reddy",
    github: "NotHarshhaa",
    instagram: "prodevopsguy",
  },
  projects: [
    {
      name: `📌 Real-Time DevOps Projects`,
      href: "https://github.com/NotHarshhaa/DevOps-Projects",
    },
  ],
  // blog setting (required)
  blog: {
    title: "𝐏𝐫𝐨𝐃𝐞𝐯𝐎𝐩𝐬𝐆𝐮𝐲 ♾️ 𝐅𝐫𝐞𝐞 𝐃𝐞𝐯𝐎𝐩𝐬/𝐂𝐥𝐨𝐮𝐝 𝐖𝐨𝐫𝐥𝐝‌",
    description: "Free DevOps/Cloud World",
    //테마
    theme: "auto", // ['light', 'dark', 'auto']
    themeToggle: true,
    themeColor: {
      dark: "#121826",
      light: "#fff",
    },
  },

  // CONFIG configration (required)
  link: "https://prodevopsguy.site",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR'] // 날짜 포맷 형식 적용
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    // @ts-ignore
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      // @ts-ignore
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      // @ts-ignore
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  googleAdsense: {
    enable: false,
    config: {
      // @ts-ignore
      client: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "NotHarshhaa/ProDevOpsGuy-Log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  // @ts-ignore
  isProd: process.env.NODE_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
