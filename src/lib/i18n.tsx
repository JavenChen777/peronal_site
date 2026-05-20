'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Lang = 'zh' | 'en';

const STORAGE_KEY = 'devtoolbox-lang';

export interface Translations {
  nav: {
    home: string;
    tools: string;
    about: string;
  };
  footer: {
    built: string;
  };
  home: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    stats: {
      totalTools: string;
      categories: string;
      openSource: string;
    };
    featured: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    browseByCategory: string;
    toolsCount: (n: number) => string;
  };
  tools: {
    pageTitle: string;
    pageSubtitle: (count: number) => string;
    searchPlaceholder: string;
    showing: string;
    of: string;
    inCategory: string;
    matching: string;
    noResults: string;
    clearFilters: string;
  };
  toolDetail: {
    backToTools: string;
    liveDemo: string;
    viewSource: string;
    download: string;
    screenshots: string;
    relatedTools: string;
  };
  about: {
    title: string;
    bio1: string;
    bio2: string;
    bio3: string;
    techStackTitle: string;
    contactTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  categories: {
    all: string;
    developer: string;
    productivity: string;
    design: string;
    data: string;
    media: string;
    other: string;
  };
  status: {
    stable: string;
    beta: string;
    archived: string;
  };
}

const zh: Translations = {
  nav: {
    home: '首页',
    tools: '工具库',
    about: '关于',
  },
  footer: {
    built: '用 Next.js 和 ☕ 构建',
  },
  home: {
    badge: '开源工具，永久免费',
    titlePrefix: '我为',
    titleHighlight: '自己',
    titleSuffix: '打造的个性工具',
    subtitle:
      '一个不断成长的实用工具集合——都是我为了日常方便而构建的小软件，也许同样能帮到你。无需登录，无追踪，好用就行。',
    stats: {
      totalTools: '工具总数',
      categories: '分类',
      openSource: '开源',
    },
    featured: {
      title: '精选工具',
      subtitle: '精心挑选的最爱',
      viewAll: '查看全部工具',
    },
    browseByCategory: '按分类浏览',
    toolsCount: (n) => `${n} 个工具`,
  },
  tools: {
    pageTitle: '全部工具',
    pageSubtitle: (count) => `浏览、搜索并筛选 ${count} 个开发者工具。`,
    searchPlaceholder: '按名称、描述或标签搜索…',
    showing: '显示',
    of: '共',
    inCategory: '分类：',
    matching: '匹配：',
    noResults: '未找到工具，请尝试调整搜索或筛选条件。',
    clearFilters: '清除筛选条件可查看全部工具。',
  },
  toolDetail: {
    backToTools: '返回工具库',
    liveDemo: '在线演示',
    viewSource: '查看源码',
    download: '夸克网盘下载',
    screenshots: '截图',
    relatedTools: '相关工具',
  },
  about: {
    title: '关于我',
    bio1: '你好！我是一名喜欢构建小而专注的工具来解决实际问题的开发者。DevToolbox 是我的个人工具集合——都是我为了让自己的工作流更快而构建的，也许同样能帮到你。',
    bio2: '这些工具大多借助了 AI 的力量——快速将日常需求转化为可运行的软件，是我在现代开发中最享受的事情之一。',
    bio3: '我相信优秀的开发者工具应该快速、简洁且尊重隐私。',
    techStackTitle: '技术栈与兴趣',
    contactTitle: '联系方式',
    ctaTitle: '探索工具库',
    ctaSubtitle: '看看我构建了什么，全部免费且开源。',
    ctaButton: '浏览全部工具',
  },
  categories: {
    all: '全部',
    developer: '开发者',
    productivity: '效率',
    design: '设计',
    data: '数据',
    media: '媒体',
    other: '其他',
  },
  status: {
    stable: '稳定版',
    beta: '测试版',
    archived: '已归档',
  },
};

const en: Translations = {
  nav: {
    home: 'Home',
    tools: 'Tools',
    about: 'About',
  },
  footer: {
    built: 'Built with Next.js and ☕',
  },
  home: {
    badge: 'Open source tools, free forever',
    titlePrefix: 'Tools I Built',
    titleHighlight: 'for Myself',
    titleSuffix: '',
    subtitle:
      "A growing collection of utilities I've built for everyday convenience — maybe they'll help you too. No login, no tracking, just tools that work.",
    stats: {
      totalTools: 'Total Tools',
      categories: 'Categories',
      openSource: 'Open Source',
    },
    featured: {
      title: 'Featured Tools',
      subtitle: 'Handpicked favorites',
      viewAll: 'View All Tools',
    },
    browseByCategory: 'Browse by Category',
    toolsCount: (n) => `${n} tool${n === 1 ? '' : 's'}`,
  },
  tools: {
    pageTitle: 'All Tools',
    pageSubtitle: (count) => `Browse, search, and filter ${count} developer tools.`,
    searchPlaceholder: 'Search by name, description, or tag…',
    showing: 'Showing',
    of: 'of',
    inCategory: 'in',
    matching: 'matching',
    noResults: 'No tools found. Try adjusting your search or filters.',
    clearFilters: 'Clear your filters to see all tools.',
  },
  toolDetail: {
    backToTools: 'Back to Tools',
    liveDemo: 'Live Demo',
    viewSource: 'View Source',
    download: 'Download',
    screenshots: 'Screenshots',
    relatedTools: 'Related Tools',
  },
  about: {
    title: 'About Me',
    bio1: "Hi! I'm a developer who loves building small, focused tools that solve real problems. DevToolbox is my personal collection of utilities — things I built because they made my workflow faster, and I figured they might help you too.",
    bio2: 'Most of these tools were built with the help of AI — rapidly turning everyday needs into working software is one of the things I enjoy most about modern development.',
    bio3: 'I believe great developer tools should be fast, simple, and private.',
    techStackTitle: 'Tech Stack & Interests',
    contactTitle: 'Contact & Links',
    ctaTitle: 'Explore the tools',
    ctaSubtitle: "Check out everything I've built. It's all free and open source.",
    ctaButton: 'Browse All Tools',
  },
  categories: {
    all: 'All',
    developer: 'Developer',
    productivity: 'Productivity',
    design: 'Design',
    data: 'Data',
    media: 'Media',
    other: 'Other',
  },
  status: {
    stable: 'Stable',
    beta: 'Beta',
    archived: 'Archived',
  },
};

export const translations: Record<Lang, Translations> = { zh, en };

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextValue>({
  lang: 'zh',
  setLang: () => {},
  t: zh,
});

export function LangProvider({ children }: { children: ReactNode }): JSX.Element {
  const [lang, setLangState] = useState<Lang>('zh');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'zh' || stored === 'en') {
      setLangState(stored);
    }
  }, []);

  const setLang = (l: Lang): void => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  return useContext(LangContext);
}
