export const languages = {
  ja: { name: '日本語', short: 'JP' },
  en: { name: 'English', short: 'EN' },
  'zh-Hant': { name: '繁體中文', short: 'TW' },
};

export const locales = {
  ja: {
    overviewHeading: '概要',
    implementationHeading: '実装で工夫した点', responsibilitiesHeading: '担当範囲',
    stackHeading: '使用技術・開発環境', stackSeparator: '、',
    stackLabels: {
      languages: '開発言語',
      frameworks: 'フレームワーク',
      frameworksUi: 'フレームワーク・UI',
      authIntegrations: '認証・外部連携',
      mobile: 'モバイル対応',
      versionControl: 'バージョン管理',
      libraries: 'ライブラリ・ツール',
      developmentAndVersionControl: '開発ツール・バージョン管理',
      frontend: 'フロントエンド',
      graphics: '3D描画・アニメーション',
      graphics3d: '3Dグラフィックス',
      animation: 'アニメーション',
      buildEnvironment: 'ビルド・開発環境',
      developmentTools: '開発ツール',
      hosting: 'ホスティング',
      stateStorage: '状態管理・データ保存',
      uiLibraries: 'UIライブラリ',
      buildTools: '開発環境・ビルドツール',
      versionHosting: 'バージョン管理・ホスティング',
      aiSearch: 'AI・検索関連',
      aiTools: 'AI開発支援ツール',
      database: 'データベース',
      middleware: 'ミドルウェア',
      infrastructure: 'インフラ・開発環境',
    },
    language: '表示言語', navigation: 'メインメニュー',
    work: '制作実績', about: '自己紹介', contact: 'お問い合わせ',
    stack: '主なスキル', portfolio: 'ポートフォリオ',
    profession: 'フロントエンドエンジニア / UIデザイナー',
    projectDetails: (title) => `${title}の詳細を見る`,
    filters: { all: 'すべて', personal: '個人開発', ui: 'UIデザイン', system: 'システム開発' },
    filterLabel: '作品カテゴリ', workIntro: 'Web・UI・3Dの制作実績を紹介します',
    close: '閉じる', gallery: '表示する画面', iosDemo: 'スマホデモ',
    toTop: 'トップへ戻る',
    biography: '台湾出身のSuuです\n小売の現場で店舗運営と在庫管理を経験した後、UI/UXデザインとWeb開発に転向しました\n近年は在庫・販売管理アプリや社内向けAIチャットボットに携わり、画面設計、フロントエンド・バックエンド開発、少人数チームの進捗管理まで担当しました',
    experience: '職務経歴',
    jobs: [
      ['日本のモバイル通信サービス会社', '在庫・販売管理アプリの開発と進捗管理、\n社内AIチャットボットの画面実装、ShopifyのECサイト改善'],
      ['個人開発・技術学習', 'エンジニアとしてのスキル向上を目指し、\n個人開発や技術学習を通じて自己研鑽に励みながら、\n転職活動を行っておりました'],
      ['個人開発', 'FigmaでのUI設計、既存WordPressサイトのReactによる再構築'],
      ['プログラミングの独学'],
      ['スターアップ企業', 'オークションアプリのUI/UXデザイン'],
    ],
    skillGroups: { Frontend: 'フロントエンド', Frameworks: 'フレームワーク・ライブラリ', Backend: 'バックエンド', Cloud: 'クラウド', Design: 'デザイン' },
    meta: 'Suuのポートフォリオ開発プロジェクトと経歴を紹介します',
  },
  en: {
    overviewHeading: 'Overview',
    implementationHeading: 'Implementation Highlights', responsibilitiesHeading: 'Responsibilities',
    stackHeading: 'Tech Stack and Development Environment', stackSeparator: ', ',
    stackLabels: {
      languages: 'Languages',
      frameworks: 'Frameworks',
      frameworksUi: 'Frameworks and UI',
      authIntegrations: 'Authentication and Integrations',
      mobile: 'Mobile Support',
      versionControl: 'Version Control',
      libraries: 'Libraries and Tools',
      developmentAndVersionControl: 'Development Tools and Version Control',
      frontend: 'Frontend',
      graphics: '3D Rendering and Animation',
      graphics3d: '3D Graphics',
      animation: 'Animation',
      buildEnvironment: 'Build and Development Environment',
      developmentTools: 'Development Tools',
      hosting: 'Hosting',
      stateStorage: 'State Management and Data Storage',
      uiLibraries: 'UI Library',
      buildTools: 'Development Environment and Build Tools',
      versionHosting: 'Version Control and Hosting',
      aiSearch: 'AI and Search',
      aiTools: 'AI Development Tools',
      database: 'Database',
      middleware: 'Middleware',
      infrastructure: 'Infrastructure and Development Environment',
    },
    stackToolNames: { 'JavaScript（設定ファイル）': 'JavaScript (configuration files)', 'ブラウザの localStorage': 'Browser localStorage', 'JavaScript（JSX）': 'JavaScript (JSX)', 'Twilio（SMS認証）': 'Twilio (SMS verification)', 'Capacitor（iOS／Android）': 'Capacitor (iOS / Android)', 'Axios（依存関係に記載）': 'Axios (listed in dependencies)', 'pgvector（ベクトル類似検索）': 'pgvector (vector similarity search)', 'TypeScript（TSX）': 'TypeScript (TSX)', 'GLSL（シェーダー）': 'GLSL (shaders)' },
    language: 'Language', navigation: 'Main navigation',
    work: 'Work', about: 'About', contact: 'Contact',
    stack: 'My Stack', portfolio: 'Portfolio',
    profession: 'Frontend Engineer / UI Designer',
    projectDetails: (title) => `View details for ${title}`,
    filters: { all: 'All', personal: 'Personal Projects', ui: 'UI Design', system: 'Systems Development' },
    filterLabel: 'Project categories', workIntro: 'Selected projects in web, interface design, and 3D.',
    close: 'Close', gallery: 'Choose a screen', iosDemo: 'Mobile Demo',
    toTop: 'Back to top',
    biography: 'I’m Suu, originally from Taiwan. I worked in store operations and inventory management before moving into UI/UX design and web development. More recently, I worked on an inventory and sales management app and an internal AI chatbot, taking on interface design, frontend and backend development, and project coordination for a small team.',
    experience: 'Experience',
    jobs: [
      ['Mobile telecommunications service provider in Japan', 'Inventory and sales app development and project coordination, internal AI chatbot interfaces, and Shopify store improvements'],
      ['Personal projects and technical learning', 'While looking for my next role, I strengthened my engineering skills through personal projects and independent technical study.'],
      ['Independent projects', 'UI design in Figma and rebuilding an existing WordPress site in React'],
      ['Self-directed programming study'],
      ['Startup', 'UI/UX design for an auction app'],
    ],
    skillGroups: { Frontend: 'Frontend', Frameworks: 'Frameworks & Libraries', Backend: 'Backend', Cloud: 'Cloud', Design: 'Design' },
    meta: 'Suu’s portfolio, featuring development projects and professional experience.',
  },
  'zh-Hant': {
    overviewHeading: '概要',
    implementationHeading: '實作重點', responsibilitiesHeading: '負責範圍',
    stackHeading: '使用技術與開發環境', stackSeparator: '、',
    stackLabels: {
      languages: '開發語言',
      frameworks: '框架',
      frameworksUi: '框架與 UI',
      authIntegrations: '身分驗證與外部串接',
      mobile: '行動裝置支援',
      versionControl: '版本控制',
      libraries: '函式庫與工具',
      developmentAndVersionControl: '開發工具與版本控制',
      frontend: '前端',
      graphics: '3D 渲染與動畫',
      graphics3d: '3D 圖形',
      animation: '動畫',
      buildEnvironment: '建置與開發環境',
      developmentTools: '開發工具',
      hosting: '網站代管',
      stateStorage: '狀態管理與資料儲存',
      uiLibraries: 'UI 函式庫',
      buildTools: '開發環境與建置工具',
      versionHosting: '版本控制與網站代管',
      aiSearch: 'AI 與搜尋',
      aiTools: 'AI 開發輔助工具',
      database: '資料庫',
      middleware: '中介軟體',
      infrastructure: '基礎架構與開發環境',
    },
    stackToolNames: { 'JavaScript（設定ファイル）': 'JavaScript（設定檔）', 'ブラウザの localStorage': '瀏覽器 localStorage', 'JavaScript（JSX）': 'JavaScript（JSX）', 'Twilio（SMS認証）': 'Twilio（簡訊驗證）', 'Capacitor（iOS／Android）': 'Capacitor（iOS／Android）', 'Axios（依存関係に記載）': 'Axios（列於相依套件）', 'pgvector（ベクトル類似検索）': 'pgvector（向量相似度搜尋）', 'TypeScript（TSX）': 'TypeScript（TSX）', 'GLSL（シェーダー）': 'GLSL（著色器）' },
    language: '顯示語言', navigation: '主選單',
    work: '作品', about: '關於我', contact: '聯絡我',
    stack: '技術工具', portfolio: '作品集',
    profession: '前端工程師／UI 設計師',
    projectDetails: (title) => `查看「${title}」的詳細內容`,
    filters: { all: '全部', personal: '個人專案', ui: '介面設計', system: '系統開發' },
    filterLabel: '作品分類', workIntro: '收錄網頁、介面設計與 3D 作品',
    close: '關閉', gallery: '選擇展示畫面', iosDemo: '手機示範',
    toTop: '回到頂端',
    biography: '我是來自台灣的 Suu\n早期在零售業負責門市營運與庫存管理，之後轉入 UI／UX 設計與網頁開發近年參與庫存與銷售管理應用程式及公司內部 AI 聊天機器人的開發，工作涵蓋介面設計、前後端開發，以及小型團隊的專案進度管理',
    experience: '工作經歷',
    jobs: [
      ['日本行動通訊服務公司', '庫存與銷售管理應用程式開發及進度管理、內部 AI 聊天機器人介面實作與 Shopify 商店改善'],
      ['個人開發與技術學習', '在尋找下一份工作的同時，我透過個人專案和自主技術學習，持續提升工程能力'],
      ['個人專案', '以 Figma 設計介面，並使用 React 重建既有的 WordPress 網站'],
      ['自學程式設計'],
      ['新創公司', '拍賣應用程式的 UI／UX 設計'],
    ],
    skillGroups: { Frontend: '前端', Frameworks: '框架與函式庫', Backend: '後端', Cloud: '雲端', Design: '設計' },
    meta: 'Suu 的作品集，介紹開發專案與工作經歷',
  },
};

const storageKey = 'suu_portfolio-language';
const previousStorageKey = 'suu-portfolio-language';

export function readLanguage() {
  try {
    const saved = localStorage.getItem(storageKey) ?? localStorage.getItem(previousStorageKey);
    return Object.hasOwn(languages, saved) ? saved : 'ja';
  } catch {
    return 'ja';
  }
}

export function applyLanguage(language) {
  document.documentElement.lang = language;
  document.title = `Suu — ${locales[language].portfolio}`;
  document.querySelector('meta[name="description"]').content = locales[language].meta;
  try {
    localStorage.setItem(storageKey, language);
    localStorage.removeItem(previousStorageKey);
  } catch {
    // The selected language still works when browser storage is unavailable.
  }
}
