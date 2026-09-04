import Link from "next/link";

export default function RisyuSupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= HEADER ================= */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* NUSNAVI Logo */}
          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-950 text-2xl font-bold text-white">
              N
            </div>

            <div>
              <p className="text-xl font-bold tracking-wide">
                NUSNAVI
              </p>

              <p className="text-[10px] tracking-[0.2em] text-slate-500">
                NAGASAKI UNIVERSITY STUDENT NAVIGATION
              </p>
            </div>

          </Link>


          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/risyu-support1"
              className="text-sm font-semibold text-blue-800"
            >
              履修登録
            </Link>

            <Link
              href="/nukyoyo-search"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-800"
            >
              成績分布
            </Link>

            <Link
              href="/student-support"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-800"
            >
              学生生活
            </Link>

            <span className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600">
              MENU
            </span>

          </nav>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">

        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">

          {/* NUSNAVIへ戻る */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            ← NUSNAVIへ戻る
          </Link>


          <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-blue-200">
            NAGASAKI UNIVERSITY
          </p>


          {/* NUSNAVIタイトル */}
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            NUSNAVI
          </h1>


          {/* サイト説明 */}
          <p className="mt-5 text-xl font-semibold text-white md:text-2xl">
            長崎大学 新入生のための総合支援サイト
          </p>


          {/* 英語タイトル */}
          <p className="mt-3 text-base tracking-wide text-blue-200 md:text-lg">
            Nagasaki University Student Navigation
          </p>

        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">


        {/* =========================
            ページタイトル
        ========================= */}
        <div className="mb-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <div className="border-l-8 border-blue-700 pl-6">

            {/* TITLE */}
            <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
              NUKYO REGI SUPPORT
            </p>

            {/* ページタイトル */}
            <h1 className="mt-3 text-4xl font-black tracking-tight text-blue-950 md:text-6xl">
              履修登録支援
            </h1>

            {/* アクセントライン */}
            <div className="mt-5 h-1 w-20 bg-blue-700"></div>

            {/* サービス名 */}
            <h2 className="mt-6 text-3xl font-black text-blue-900 md:text-5xl">
              NUKYO REGI Suppo
            </h2>

            {/* 日本語説明 */}
            <p className="mt-4 text-xl font-bold text-slate-700 md:text-2xl">
              長崎大学 履修登録支援サービス
            </p>

            {/* 英語説明 */}
            <p className="mt-2 text-base text-slate-500 md:text-lg">
              Nagasaki University Registration Support
            </p>

          </div>

        </div>


        {/* =========================
            教養教育〈総論編〉
        ========================= */}
        <Link
          href="/risyu-support1/kyoyo-theory"
          className="group block"
        >

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">

            <div className="flex items-start justify-between gap-6">

              <div>

                <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
                  KYOTOYO EDUCATION
                </p>

                <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
                  教養教育〈総論編〉
                </h2>

                <p className="mt-4 text-xl font-semibold text-slate-700">
                  新入生向け・履修登録完全ガイド
                </p>

              </div>

              <span className="hidden text-3xl text-blue-700 transition-transform duration-300 group-hover:translate-x-2 md:block">
                →
              </span>

            </div>


            <p className="mt-6 max-w-3xl leading-8 text-slate-600">
              履修登録の考え方、必修科目、必要単位数などを
              新入生にも分かりやすく解説します。
            </p>


            <p className="mt-7 font-bold text-blue-600">
              ▶ 記事を読む
            </p>

          </div>

        </Link>


        {/* =========================
            教養教育〈実践編〉
        ========================= */}
        <Link
          href="/risyu-support1/kyoyo-practice"
          className="group mt-8 block"
        >

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">

            <div className="flex items-start justify-between gap-6">

              <div>

                <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
                  PRACTICAL GUIDE
                </p>

                <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
                  教養教育〈実践編〉
                </h2>

                <p className="mt-4 text-xl font-semibold text-slate-700">
                  新入生向け・科目選択＆履修登録ガイド
                </p>

              </div>

              <span className="hidden text-3xl text-blue-700 transition-transform duration-300 group-hover:translate-x-2 md:block">
                →
              </span>

            </div>


            <p className="mt-6 max-w-3xl leading-8 text-slate-600">
              実際にどの科目を選び、どのように履修登録するのかを
              新入生にも分かりやすく解説します。
            </p>


            <p className="mt-7 font-bold text-blue-600">
              ▶ 記事を読む
            </p>

          </div>

        </Link>


        {/* =========================
            その他の履修支援
        ========================= */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">

          <p className="text-xs font-bold tracking-[0.3em] text-blue-700">
            COMING SOON
          </p>

          <h2 className="mt-4 text-3xl font-black text-blue-900 md:text-4xl">
            🚧 その他の履修支援
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            今後、履修登録に役立つコンテンツを順次追加予定です。
          </p>

        </div>


      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-blue-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="flex flex-col justify-between gap-10 md:flex-row">


            {/* Logo */}
            <div>

              <Link
                href="/"
                className="flex items-center gap-3"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-950">
                  N
                </div>

                <span className="text-2xl font-bold">
                  NUSNAVI
                </span>

              </Link>

              <p className="mt-4 text-sm text-blue-200">
                長崎大学 新入生のための総合支援サイト
              </p>

              <p className="mt-2 text-xs tracking-wider text-blue-300">
                Nagasaki University Student Navigation
              </p>

            </div>


            {/* Footer Navigation */}
            <div className="flex flex-col gap-3 text-sm text-blue-200">

              <Link
                href="/"
                className="transition hover:text-white"
              >
                NUSNAVIトップ
              </Link>

              <Link
                href="/risyu-support1"
                className="transition hover:text-white"
              >
                履修登録支援
              </Link>

              <Link
                href="/nukyoyo-search"
                className="transition hover:text-white"
              >
                成績分布検索
              </Link>

              <Link
                href="/student-support"
                className="transition hover:text-white"
              >
                学生生活支援情報
              </Link>

            </div>

          </div>


          {/* Copyright */}
          <div className="mt-12 border-t border-blue-800 pt-6 text-xs text-blue-400">
            © 2026 NUSNAVI
          </div>

        </div>

      </footer>

    </main>
  );
}