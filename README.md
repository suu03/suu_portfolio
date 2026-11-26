# suu_portfolio

ReactとViteで作成したポートフォリオです。

```sh
npm ci
npm run dev
npm run build
```

プロジェクトの内容は `src/projects.js` にまとまっています。画像や動画は `public/media/` に置き、対象プロジェクトの `media` に `{ type: 'image', src: '/media/example.png', label: '画面の説明' }` 形式で追加します。動画の場合は `type: 'video'` を指定します。`cover` でカードに使う画像を指定できます。メディアがないプロジェクトはテキストで表示されます。

プロフィールと職務経歴の文章は `src/locales.js`、職務経歴の日付とスキル一覧は `src/profile.jsx` で編集できます。
