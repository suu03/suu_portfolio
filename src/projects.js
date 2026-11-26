const projects = [
  {
    id: 'store-portal',
    group: 'system',
    year: 2026,
    title: "受発注・在庫・請求管理システム",
    implementation: [
      ["請求承認から発行までのデータ整合性を改善", "管理画面と店舗ポータルの間で請求承認データを同期する処理を見直しましたあわせて、請求書の採番と明細行の生成を修正し、店舗側のプレビューで正式な請求書PDFを確認できるようにしました"],
      ["店舗に公開する商品情報をAPI側で制御", "商品マスタに項目を追加する際、店舗向けAPIのレスポンスから原価情報を除外しましたさらに、店舗向けレスポンスに原価などの項目が含まれていないかを確認するスクリプトを追加しました"],
      ["店舗ユーザーの初回認証フローを整備", "初回パスワード変更時にSMS認証を組み込み、送信先には携帯番号を優先して使うようにしました管理画面と店舗ポータルの両方で、担当者の更新に対応しました"],
    ],
    description: 'Web・iOS・Android対応の在庫・販売管理アプリ店舗スタッフは発注、返品、在庫確認、通知の確認をひとつのポータルで行えます',
    responsibilitiesIntro: "Reactによる画面開発、FastAPIによるAPI開発、PostgreSQLのテーブル・項目変更を担当しました主に店舗ポータルと管理画面の発注、請求、アカウント管理機能を実装・改修しました",
    responsibilities: [
      { title: "初期開発・店舗ポータル", description: "React・FastAPI・PostgreSQLを用いたアプリケーションの初期構成を整備し、データベースを使ったログイン認証、店舗在庫画面、新規発注、アカウント設定を実装" },
      { title: "請求承認・請求書発行", description: "管理画面と店舗ポータル間の請求承認データの同期処理を改修請求書番号の採番と明細行の生成を修正し、店舗ポータルで正式な請求書PDFを確認できるように変更" },
      { title: "商品マスタ・アクセス制御", description: "商品マスタに項目を追加し、店舗向けAPIのレスポンスから原価情報を除外対象項目が店舗向けに返されていないことを確認するスクリプトも作成" },
      { title: "店舗ユーザー認証・担当者管理", description: "初回パスワード変更時のSMS認証と、管理画面・店舗ポータルでの担当者更新フローを実装SMS認証では携帯番号を優先するように改修" },
      { title: "通知・書類管理", description: "店舗ポータルの通知詳細とダッシュボードを改善し、書類管理のカテゴリと棚卸用のExcelテンプレートを追加" },
      '週次の進捗確認とスケジュール調整',
    ],
    stackGroups: [
      ['languages', ['Python', 'JavaScript（JSX）', 'SQL', 'HTML', 'CSS']],
      ['frameworksUi', ['FastAPI', 'React 19', 'Tailwind CSS']],
      ['libraries', ['SQLAlchemy', 'Pydantic', 'psycopg', 'Vite', 'openpyxl']],
      ['authIntegrations', ['JWT', 'Twilio（SMS認証）', 'Web Push', 'APNs']],
      ['mobile', ['Capacitor（iOS／Android）']],
      ['database', ['PostgreSQL 16']],
      ['middleware', ['Nginx', 'Uvicorn']],
      ['infrastructure', ['Docker', 'Docker Compose']],
      ['versionControl', ['Git', 'GitLab']],
    ],
    coverImages: [
      '/media/app-1.png',
      '/media/app-2.png',
      '/media/app-3.png',
      '/media/app-4.png',
      '/media/app-5.png',
    ],
    media: [
      { type: 'image', src: '/media/app-1.png', label: 'iOS – ログイン' },
      { type: 'image', src: '/media/app-2.png', label: 'iOS – ダッシュボード' },
      { type: 'image', src: '/media/app-3.png', label: 'iOS – 発注一覧' },
      { type: 'image', src: '/media/app-4.png', label: 'iOS – 在庫一覧' },
      { type: 'image', src: '/media/app-5.png', label: 'iOS – お知らせ' },
    ],
  },
  {
    id: 'chatbot',
    group: 'system',
    year: 2025,
    title: 'チャットボット',
    description: 'カスタマーサポート業務の効率化を目的とした自社開発のAIチャットボット\nユーザーからの問い合わせにAIが自動回答し、管理画面ではサイトごとにナレッジを管理できます',
    responsibilities: [
      'Vue 3で画面遷移、状態管理、入力・表示処理を実装しました開発資料の作成や、他部門との内容確認・調整にも携わりました',
      "サイト管理・管理ユーザー管理画面のAPI連携と、登録・編集・削除機能の実装",
      "サイト別ナレッジ管理画面の実装ナレッジの検索・編集、CSV入出力、画像アップロードに対応",
    ],
    implementation: [
      ["CSV一括登録で、エラー箇所を修正しやすくした", "日本語のCSVを取り込めるようにUTF-8（BOM付き）とCP932に対応しました必須項目に不備がある行はスキップし、登録件数・スキップ件数・行番号付きのエラーを返すことで、利用者が修正箇所を特定しやすくしました"],
      ["CSVの再取り込みで重複が生じにくいようにした", "サイトごとに商品、カテゴリ、タイトル、本文を比較し、前後の空白や英字の大文字・小文字の違いをそろえて重複を判定しました\n登録済みのデータに加え、同じCSV内の重複行もスキップするようにしました"],
      ["サイトを起点にナレッジを管理できる画面にした", "サイト別一覧で登録件数を確認し、対象サイトの詳細画面でカテゴリやキーワードによる検索・編集ができる構成にしました\n検索条件を変更した際は1ページ目に戻し、絞り込み後の結果を確認しやすくしました"],
    ],
    stackGroups: [
      ['languages', ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS']],
      ['frameworks', ['FastAPI', 'Vue 3', 'Bootstrap']],
      ['libraries', ['SQLAlchemy', 'Pydantic', 'Vite', 'Vue Router', 'Axios（依存関係に記載）']],
      ['aiSearch', ['OpenAI API', 'pgvector（ベクトル類似検索）']],
      ['aiTools', ['OpenAI Codex']],
      ['database', ['PostgreSQL']],
      ['middleware', ['Nginx', 'Uvicorn']],
      ['infrastructure', ['Docker', 'Docker Compose']],
      ['developmentAndVersionControl', ['VS Code', 'Git', 'GitLab']],
    ],
    media: [{ type: 'image', src: '/media/chatbot-1.png', label: 'チャットボットの画面' }],
  },
  {
    id: 'auction-app',
    listOnly: true,
    previewIcons: ['figma'],
    group: 'ui',
    year: 2019,
    title: 'オークションアプリのUI/UXデザイン',
    description: 'スマートフォン向けオークションアプリのUI/UXデザインで、\nダッシュボードや入札機能を含む約14画面と操作フローを設計しました',
    descriptionNote: '※画面画像は公開を控えています',
  },
  {
    id: 'three-portfolio',
    group: 'personal',
    year: 2025,
    title: 'ポートフォリオ2025',
    description: "3Dの星空を探索しながら、プロフィールや制作実績を日本語と英語で閲覧できるポートフォリオサイトです",
    implementation: [
      ["約15,000個の星をまとめて描画", "星の座標と色を `Float32Array` に格納し、Three.jsの `BufferGeometry` と `Points` でまとめて描画しました星のデータは初回に生成し、毎フレームの更新では同じデータを再利用しています"],
      ["星空の奥行きと光を表現", "放射状のグラデーションで、星の中心から外側へ光がやわらかく消えるようにしました背景の星空をゆっくり回転させ、GLSLのカスタムシェーダーとBloomを組み合わせて発光を表現しています"],
      ["3D空間での探索と情報の読みやすさを両立", "ドラッグで視点を変えられるようにし、3D空間内のメニューはホバー時に色を変えて、選べることが伝わるようにしましたプロフィールなどの情報は画面上のモーダルに表示し、その場で日本語と英語を切り替えられるようにしています"],
      ["クリックで現れる流れ星の演出", "3D空間内の「Make a Wish!」をクリックすると、流れ星が夜空を斜めに横切ります直近30フレーム分の位置を記録し、古い位置ほど光の粒を小さく、透明にすることで、尾が徐々に消えていく様子を表現しました流れ星の色と発光の強さも時間に応じて変化させ、演出中は連続クリックで流れ星が重ならないようにしています"],
    ],
    stackGroups: [
      ['languages', ['TypeScript（TSX）', 'HTML', 'CSS', 'GLSL（シェーダー）']],
      ['frontend', ['React 18', 'Tailwind CSS']],
      ['graphics3d', ['Three.js', 'React Three Fiber', 'Drei', 'React Three Postprocessing']],
      ['animation', ['Framer Motion']],
      ['buildEnvironment', ['Vite', 'Node.js', 'npm', 'PostCSS', 'Autoprefixer']],
      ['developmentTools', ['ESLint', 'Git', 'GitHub']],
      ['hosting', ['GitHub Pages']],
    ],
    cover: '/media/portfolio2025.png',
    media: [
      { type: 'video', src: '/media/portfolio2025-1.mp4', label: '星空に浮かぶ様子' },
      { type: 'video', src: '/media/portfolio2025-2.mp4', label: 'モーダルの表示' },
      { type: 'video', src: '/media/portfolio2025-3.mp4', label: '流れ星の演出' },
    ],
  },
  {
    id: 'wordpress-rebuild',
    listOnly: true,
    previewIcons: ['wordpress', 'figma', 'react'],
    group: 'personal',
    period: '2020〜2023',
    title: 'WordPressサイトのReactによる再構築',
    description: '既存のWordPressサイトを、FigmaでUIを設計し、Reactで再構築した個人プロジェクトです',
    descriptionNote: '※画面画像は公開を控えています',
  },
  {
    id: 'three-todo',
    media: [
      { type: 'image', src: '/media/todo-list.png', label: '3Dタスク管理画面' },
      { type: 'video', src: '/media/todo-list-completion.mp4', label: 'タスク完了後の光る効果', silent: true },
    ],
    group: 'personal',
    period: '2023〜2025',
    title: '3Dタスク管理アプリ',
    description: 'タスクを惑星に見立て、3D空間で管理できるWebアプリです\nタスクの登録・削除や、完了状態の切り替えと絞り込みができます',
    implementation: [
      ['3D表示とタスク操作の連携', 'React Three FiberとThree.jsで3D空間を描画し、視点を回転させながら、気になる惑星を選んでタスクの詳細を開けるようにしました'],
      ['カテゴリの見分けやすさ', 'ユーザーがカテゴリの色を設定でき、その色を惑星に反映することで、タスクの種類をひと目で見分けられるようにしました'],
      ['ブラウザでのデータ保存', 'Zustandでタスクとカテゴリの状態を管理し、ブラウザの localStorage に保存することで、ページを再読み込みしても続きから使えるようにしました'],
      ['タスク完了後の光る効果', 'タスクを完了にすると、対応する惑星がカテゴリの色で明るく光り、わずかに脈動します\n完了したタスクを3D空間の中でひと目で見分けられるようにしました\n実装では、Zustandで管理する完了状態に応じて、惑星のマテリアルの発光強度（`emissiveIntensity`）を切り替えています\nさらに、React Three Postprocessingの `Bloom` で明るい部分の光を周囲ににじませ、React Three Fiberの `useFrame` で惑星の大きさを周期的に変化させています'],
    ],
    stackGroups: [
      ['languages', ['TypeScript', 'JavaScript（設定ファイル）', 'HTML', 'CSS']],
      ['frontend', ['React 18', 'Tailwind CSS']],
      ['graphics', ['Three.js', 'React Three Fiber', 'Drei', 'React Three Postprocessing', 'React Spring']],
      ['stateStorage', ['Zustand', 'ブラウザの localStorage']],
      ['uiLibraries', ['Lucide React']],
      ['buildTools', ['Node.js', 'npm', 'Vite', 'ESLint', 'PostCSS', 'Autoprefixer']],
      ['versionHosting', ['Git', 'GitHub', 'GitHub Pages']],
    ],
  },
  {
    id: 'web-games',
    cover: '/media/bubbletealogo.svg',
    media: [
      { type: 'image', src: '/media/bubbleteagame-2.png', label: 'タピオカゲームのプレイ画面' },
    ],
    group: 'personal',
    period: '2023〜2025',
    title: 'タピオカゲーム',
    description: 'タピオカミルクティーをモチーフにしたカジュアルゲームアプリ',
    detailDescription: '難易度を選択し、制限時間内にカップをクリックしながら、動き回るタピオカをストローで捕まえます\nシンプルな操作で、反射神経とスピードを競うゲームです',
    implementation: [['ゲームの状態管理と進行', 'ゲームの状態を管理し、プレイ中の進行を制御するロジックを実装しました']],
    stackGroups: [
      ['languages', ['TypeScript']],
      ['frontend', ['React', 'Tailwind CSS']],
      ['graphics3d', ['Three.js']],
      ['buildTools', ['Vite']],
    ],
  },
];

const translations = {
  en: {
    'store-portal': {
      title: "Order, Inventory, and Billing Management System",
      implementation: [
        ["Improved data consistency from invoice approval through issuance", "I revised how invoice approvals sync between the admin interface and the store portal. I also fixed invoice numbering and line-item generation, so store staff could preview the official invoice PDF."],
        ["Controlled store-facing product information at the API level", "When adding fields to the product master, I excluded cost information from store-facing API responses. I also added a script to check that these responses do not contain cost or other restricted fields."],
        ["Improved first-time authentication for store users", "I added SMS verification to the first password change, prioritizing mobile numbers for delivery. I also enabled contact updates in both the admin interface and the store portal."],
      ],
      description: 'An inventory and sales management app for web, iOS, and Android. Store staff use one portal to place orders, process returns, check stock, and review notifications.',
      responsibilitiesIntro: "I developed interfaces in React and APIs in FastAPI, and updated PostgreSQL tables and fields. My work focused on order placement, billing, and account management in the store portal and admin interface.",
      responsibilities: [
        { title: "Initial development and store portal", description: "Set up the initial application structure with React, FastAPI, and PostgreSQL. Implemented database-backed sign-in, the store inventory screen, new orders, and account settings." },
        { title: "Invoice approval and issuance", description: "Updated how invoice approval data syncs between the admin interface and the store portal. Fixed invoice numbering and line-item generation so store staff could view official invoice PDFs in the portal." },
        { title: "Product master and access control", description: "Added fields to the product master and excluded cost information from store-facing API responses. Wrote a script to verify that those responses did not include restricted fields." },
        { title: "Store user authentication and contact management", description: "Implemented SMS verification on the first password change and contact update flows in both interfaces. Updated SMS verification to prioritize mobile numbers." },
        { title: "Notifications and document management", description: "Improved notification details and the store portal dashboard. Added document management categories and an Excel template for stocktaking." },
        'Ran weekly progress checks and coordinated the schedule.',
      ],
      mediaLabels: ['iOS – Sign in', 'iOS – Dashboard', 'iOS – Orders', 'iOS – Inventory', 'iOS – Notifications'],
    },
    chatbot: {
      title: 'AI Chatbot',
      description: 'An internal AI chatbot where employees can ask questions and administrators can manage knowledge entries by site.',
      responsibilities: [
        'I used Vue 3 to implement navigation, state management, and input and display logic. I also prepared development documentation and reviewed it with other departments.',
        "Integrated APIs for site and admin user management and implemented create, edit, and delete operations.",
        "Built per-site knowledge management with search, editing, CSV import and export, and image uploads.",
      ],
      implementation: [
        ["Making CSV import errors easier to fix", "I supported UTF-8 with a BOM and CP932 for Japanese CSV files. Rows with missing or invalid required fields are skipped. The import reports how many rows were added or skipped and includes row numbers with errors so users can locate and fix them."],
        ["Reducing duplication when reimporting CSV files", "I compare product, category, title, and body per site, trimming surrounding spaces and normalizing Latin letter case. The import skips both existing records and duplicate rows in the same CSV."],
        ["Organizing knowledge management around sites", "The site list shows the number of entries per site. On the site detail page, users can search by category or keyword and edit entries. Changing the search criteria resets pagination to the first page so the filtered results are easy to review."],
      ],
      mediaLabels: ['Chatbot screenshot'],
    },
    'auction-app': {
      title: 'Auction App UI/UX Design',
      description: 'UI and user flow design for a mobile auction app, covering about 14 screens, including the dashboard and bidding',
      descriptionNote: '※ Screenshots are kept private',
    },
    'three-portfolio': {
      title: 'Portfolio 2025',
      description: "An interactive portfolio where visitors explore a 3D starfield to browse my profile and projects in Japanese or English.",
      implementation: [
        ["Rendering about 15,000 stars together", "I stored star positions and colors in a `Float32Array` and rendered them together using Three.js `BufferGeometry` and `Points`. Star data is generated once and reused on every frame."],
        ["Creating depth and soft light", "Radial gradients let the light fade softly from each star’s center. The background starfield rotates slowly, with custom GLSL shaders and Bloom creating the glow."],
        ["Balancing 3D exploration with readability", "Visitors can drag to change the viewpoint. Menu titles in the 3D scene change color on hover to show they’re selectable. Profile information appears in a modal, where visitors can switch between Japanese and English."],
        ["A shooting star on click", "Clicking “Make a Wish!” sends a shooting star diagonally across the sky. The animation records positions from the last 30 frames, making older particles smaller and more transparent so the trail fades. Color and brightness change over time, and repeat clicks during the animation cannot trigger overlapping stars."],
      ],
      mediaLabels: ['Floating among the stars', 'Opening a modal', 'Shooting star effect'],
    },
    'wordpress-rebuild': {
      title: 'Rebuilding a WordPress Site with React',
      description: 'A personal project in which I designed the interface in Figma and rebuilt an existing WordPress site with React',
      descriptionNote: '※ Screenshots are kept private',
    },
    'three-todo': {
      title: '3D Task Manager',
      mediaLabels: ['3D task manager screenshot', 'Glow effect on completion'],
      description: 'A web app that represents tasks as planets in a 3D space. Users can add or delete tasks, mark them complete or incomplete, and filter by status.',
      implementation: [
        ['Connecting the 3D view with task controls', 'I rendered the 3D scene with React Three Fiber and Three.js so users can rotate the view and select a planet to open its task details.'],
        ['Making categories easy to identify', 'Users can assign colors to categories. Those colors carry over to the planets so task types are easy to recognize at a glance.'],
        ['Saving data in the browser', 'I used Zustand to manage task and category state and saved it in the browser’s localStorage so users can pick up where they left off after refreshing.'],
        ['Glow effect on completion', 'Marking a task complete makes its planet glow brightly in its category color and pulse gently, so completed tasks stand out in the 3D scene. The completion state in Zustand controls the planet material’s `emissiveIntensity`. React Three Postprocessing’s `Bloom` spreads the glow around bright areas, while React Three Fiber’s `useFrame` periodically changes the planet’s scale.'],
      ],
    },
    'web-games': {
      title: 'Bubble Tea Game',
      mediaLabels: ['Bubble Tea Game screenshot'],
      description: 'Choose a level to start. Before time runs out, click the cup quickly and use the straw to catch the moving tapioca pearls. Drink as much milk tea and as many pearls as you can.',
      implementation: [['Game state and progression', 'I implemented the logic that manages game state and controls progression during play.']],
    },
  },
  'zh-Hant': {
    'store-portal': {
      title: "訂單、庫存與請款管理系統",
      implementation: [
        ["改善請款審核到開立流程的資料一致性", "調整管理介面與門市入口之間的請款審核資料同步，並修正請款單編號與明細列的產生流程，讓門市人員可在預覽中查看正式的請款單 PDF"],
        ["在 API 層控制對門市公開的商品資訊", "在商品主檔新增欄位時，將成本資訊排除在門市端 API 回應之外；另加入指令稿，檢查門市端回應是否包含成本等受限欄位"],
        ["完善門市使用者首次驗證流程", "在首次變更密碼時加入簡訊驗證，優先使用手機號碼接收簡訊管理介面與門市入口也都支援更新聯絡人資料"],
      ],
      description: '支援網頁、iOS 與 Android 的庫存與銷售管理應用程式門市人員可在同一個入口網站訂貨、處理退貨、查詢庫存與查看通知',
      responsibilitiesIntro: "我負責以 React 開發介面、以 FastAPI 開發 API，並調整 PostgreSQL 的資料表與欄位主要實作與改進門市入口及管理介面的訂貨、請款與帳號管理功能",
      responsibilities: [
        { title: "初期開發與門市入口", description: "使用 React、FastAPI 與 PostgreSQL 建立應用程式的初始架構，實作以資料庫為基礎的登入驗證、門市庫存畫面、新增訂單及帳號設定" },
        { title: "請款審核與請款單開立", description: "改進管理介面與門市入口之間的請款審核資料同步修正請款單編號與明細列的產生流程，讓門市人員可在入口網站查看正式的請款單 PDF" },
        { title: "商品主檔與存取控管", description: "新增商品主檔欄位，並將成本資訊排除在門市端 API 回應之外另撰寫指令稿，確認門市端回應未包含受限欄位" },
        { title: "門市使用者驗證與聯絡人管理", description: "實作首次變更密碼時的簡訊驗證，以及管理介面與門市入口的聯絡人更新流程將驗證簡訊的寄送改為優先使用手機號碼" },
        { title: "通知與文件管理", description: "改善門市入口的通知詳情和儀表板，並新增文件管理分類及盤點用 Excel 範本" },
        '每週追蹤專案進度並協調時程',
      ],
      mediaLabels: ['iOS – 登入', 'iOS – 儀表板', 'iOS – 訂貨列表', 'iOS – 庫存列表', 'iOS – 通知'],
    },
    chatbot: {
      title: 'AI 聊天機器人',
      description: '供公司內部使用的 AI 聊天機器人員工可在聊天介面提問，管理員可依網站管理知識庫',
      responsibilities: [
        '我使用 Vue 3 實作頁面切換、狀態管理及輸入與顯示邏輯，也負責撰寫開發文件，並與其他部門確認內容及協調需求',
        "串接網站管理與管理員帳號管理介面的 API，實作新增、編輯與刪除功能",
        "實作各網站的知識庫管理介面，支援搜尋、編輯、CSV 匯入匯出與圖片上傳",
      ],
      implementation: [
        ["讓 CSV 批次匯入的錯誤更容易修正", "為了匯入日文 CSV，支援含 BOM 的 UTF-8 與 CP932略過必填欄位有誤的資料列，並回傳成功新增筆數、略過筆數及含列號的錯誤，方便使用者找出並修正問題"],
        ["減少重複匯入 CSV 產生的資料", "以網站為單位，比對商品、分類、標題與內文，先去除前後空白並統一英文字母大小寫，再判斷是否重複除了已存在的資料，同一 CSV 內的重複列也會略過"],
        ["以網站為入口管理知識庫", "網站清單顯示各站的知識庫筆數，進入網站詳細頁後可依分類或關鍵字搜尋，也能編輯資料變更搜尋條件時會回到第一頁，方便查看篩選結果"],
      ],
      mediaLabels: ['聊天機器人畫面'],
    },
    'auction-app': {
      title: '拍賣應用程式 UI／UX 設計',
      description: '手機拍賣應用程式的 UI／UX 設計，涵蓋儀表板、出價等約 14 個畫面及其操作流程',
      descriptionNote: '※ 畫面截圖未公開',
    },
    'three-portfolio': {
      title: '作品集 2025',
      description: "可探索 3D 星空的互動式作品集，提供日文與英文的個人簡介及作品介紹",
      implementation: [
        ["一次繪製約 15,000 顆星星", "將星星的座標與顏色儲存在 `Float32Array` 中，並用 Three.js 的 `BufferGeometry` 與 `Points` 一次繪製星星資料只在初始化時產生，之後每個影格都重複使用"],
        ["營造星空的深度與光暈", "利用放射狀漸層，讓星光從中心向外柔和淡出背景星空緩慢旋轉，並結合自訂 GLSL 著色器與 Bloom 呈現發光效果"],
        ["兼顧 3D 探索與資訊可讀性", "拖曳即可改變視角，滑鼠移到 3D 選單標題上時，文字會變色以提示可點選個人簡介等資訊會在彈出視窗中顯示，並可直接切換日文與英文"],
        ["點擊觸發流星動畫", "點選 3D 空間中的「Make a Wish!」，流星便會斜向劃過夜空動畫記錄最近 30 個影格的位置，讓較早的光點縮小並變透明，呈現逐漸消散的尾跡流星的顏色與亮度會隨時間變化，動畫播放期間也會避免連點造成流星重疊"],
      ],
      mediaLabels: ['漂浮在星空中', '開啟彈出視窗', '流星效果'],
    },
    'wordpress-rebuild': {
      title: '使用 React 重建 WordPress 網站',
      description: '以 Figma 設計介面、使用 React 重建既有 WordPress 網站的個人專案',
      descriptionNote: '※ 畫面截圖未公開',
    },
    'three-todo': {
      title: '3D 任務管理工具',
      mediaLabels: ['3D 任務管理畫面', '任務完成時的發光效果'],
      description: '將任務化為行星，在 3D 空間中管理的網頁應用程式使用者可以新增或刪除任務、切換完成狀態，並依狀態篩選',
      implementation: [
        ['串接 3D 畫面與任務操作', '使用 React Three Fiber 與 Three.js 繪製 3D 場景，讓使用者旋轉視角並點選行星查看任務詳情'],
        ['讓任務分類一目了然', '使用者可自訂分類顏色，行星會套用對應色彩，讓不同類型的任務一眼就能辨識'],
        ['在瀏覽器中儲存資料', '使用 Zustand 管理任務與分類狀態，並儲存至瀏覽器的 localStorage，重新整理頁面後也能繼續使用'],
        ['任務完成時的發光效果', '將任務標記為完成後，對應的行星會以分類顏色發出亮光，並微微脈動，讓已完成的任務在 3D 場景中一目了然實作上，依據 Zustand 管理的完成狀態切換行星材質的發光強度（`emissiveIntensity`），再用 React Three Postprocessing 的 `Bloom` 讓亮部的光向周圍擴散，並以 React Three Fiber 的 `useFrame` 週期性改變行星大小'],
      ],
    },
    'web-games': {
      title: '珍珠奶茶遊戲',
      mediaLabels: ['珍珠奶茶遊戲畫面'],
      description: '選擇關卡後開始遊戲在時間內快速點擊杯子，用吸管捕捉四處移動的珍珠，盡可能喝下更多奶茶和珍珠',
      implementation: [['遊戲狀態與流程', '實作遊戲狀態管理及遊玩過程中的流程控制']],
    },
  },
};

export function getProjects(language) {
  const localized = translations[language];
  if (!localized) return projects;

  return projects.map((project) => {
    const { mediaLabels, ...copy } = localized[project.id] ?? {};
    return {
      ...project,
      ...copy,
      detailDescription: copy.description === undefined ? project.detailDescription : copy.detailDescription,
      media: project.media?.map((item, index) => ({ ...item, label: mediaLabels?.[index] ?? item.label })),
    };
  });
}
