# data-manager

日常生活のデータ（イベント・家計簿/仕訳・科目・組織/グループ）を統合管理する Web アプリケーションです。

## アーキテクチャ概要

Next.js（`web/`）のクライアントから Supabase（Auth + PostgreSQL）へ直接アクセスする構成です。詳細（Container / Component 図、データフロー、ディレクトリ構成）は [docs/architecture.md](docs/architecture.md) を参照してください。

```mermaid
C4Context
  title System Context - データ管理アプリ

  Person(user, "ユーザー", "日常のイベント・収支・科目を管理する個人／組織メンバー")

  System(dm, "データ管理アプリ (data-manager)", "Next.js 15 / React 19 / TypeScript")

  System_Ext(supabase, "Supabase", "認証 (Supabase Auth) と PostgreSQL データベース")
  System_Ext(mail, "メール配信", "サインアップ確認メール（Supabase Auth 経由）")
  System_Ext(gfonts, "Google Fonts", "Geist フォント（ビルド時取得）")

  Rel(user, dm, "ブラウザで利用", "HTTPS")
  Rel(dm, supabase, "認証・データ操作", "HTTPS / supabase-js")
  Rel(supabase, mail, "確認メール送信を依頼")
  Rel(mail, user, "確認メールを送付", "Email")
  Rel(dm, gfonts, "フォント取得（ビルド時）", "HTTPS")

  UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

---

## リポジトリ構成

- `web/` — Next.js アプリ本体（セットアップ手順は [web/README.md](web/README.md)）
- `server/` — DB 設計（`create_tables.sql`, ER 図）
- `docs/` — 設計ドキュメント
